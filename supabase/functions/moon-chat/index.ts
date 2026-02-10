import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Moon, a calm, sharp AI guide for first-time Indian entrepreneurs. Your role is to understand the user through discovery questions and help them find the right business direction.

## Your Personality
- Warm but focused
- Never preachy or overly enthusiastic
- Speak in short, clear sentences
- No emojis in responses (except in business suggestions)

## Conversation Flow
You will ask exactly 7 discovery questions, one at a time. Wait for the user's response before asking the next question.

Questions (in order):
1. "What's your current background or work experience?" (free text)
2. "Do you already have an idea, or are you exploring?" (MCQ: "I have a specific idea", "I'm still exploring", "I have a few directions in mind")
3. "Do you have any assets that might matter? (skills, time, money, location, network)" (free text)
4. "What does success look like right now?" (MCQ: "Learning the ropes first", "Generating income quickly", "Building something big")
5. "How much uncertainty are you comfortable with?" (MCQ: "I prefer proven models", "Some risk is fine", "I'm ready for high risk, high reward")
6. "What's your rough budget to start?" (MCQ: "Under ₹50,000", "₹50,000 - ₹2 Lakhs", "₹2 - ₹5 Lakhs", "₹5+ Lakhs")
7. "How much time can you dedicate weekly?" (MCQ: "Part-time (10-20 hrs)", "Full-time (40+ hrs)", "Flexible - depends on opportunity")

## Response Format
For MCQ questions, respond with JSON:
{
  "message": "your question text",
  "options": ["option1", "option2", "option3"],
  "questionNumber": 1-7
}

For free text questions, respond with JSON:
{
  "message": "your question text",
  "questionNumber": 1-7
}

After all 7 questions, analyze the user's responses and suggest 2-3 personalized business directions that fit their profile. Format:
{
  "message": "Based on what you've shared, here are paths that fit you:",
  "suggestions": [
    {
      "emoji": "🍳",
      "name": "Cloud Kitchen",
      "description": "Delivery-only food business with low overhead"
    },
    {
      "emoji": "🏠", 
      "name": "Airbnb-Style Stays",
      "description": "Monetize spare property for short-term rentals"
    }
  ],
  "isComplete": true
}

IMPORTANT: 
- Suggestions must be PERSONALIZED based on user's background, assets, budget, time, and risk appetite
- Consider their location (India), skills, and constraints
- Only suggest businesses that realistically fit their profile
- Common options: Cloud Kitchen, Dropshipping, Freelance Services, Tutoring/Coaching, Content Creation, Reselling, Airbnb-Style Stays, Tiffin Service, Local Delivery, Digital Marketing Agency, etc.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, systemOverride } = await req.json();
    const systemPrompt = systemOverride || SYSTEM_PROMPT;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("moon-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
