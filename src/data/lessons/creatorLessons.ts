// Content Creator Path - All 8 Modules with Lessons
import { LessonData } from '../lessonData';

// Module 1: Niche Discovery (8 lessons)
export const creatorModule1Lessons: LessonData[] = [
  {
    id: "cr-m1-l1", moduleId: 1, lessonIndex: 0, title: "Identify your passion areas", duration: "5 min",
    questions: [{
      id: "cr-m1-l1-q1", type: "scenario",
      context: "You enjoy cooking, fitness, and tech reviews. Your friends say your cooking explanations are clearest.",
      prompt: "Which niche should you explore first?",
      correctAnswer: ["Cooking - leverage your natural teaching strength"],
      choices: ["All three simultaneously", "Cooking - leverage your natural teaching strength", "Tech - highest earning potential", "Fitness - trending right now"],
      explanation: "Start where you have natural advantage. Clarity in teaching = viewer retention.",
      proTip: "Your unique angle often comes from how you explain, not just what you cover."
    }]
  },
  {
    id: "cr-m1-l2", moduleId: 1, lessonIndex: 1, title: "Analyze competitor landscape", duration: "6 min",
    questions: [{
      id: "cr-m1-l2-q1", type: "multiple-choice",
      prompt: "When analyzing successful creators in your niche, what matters MOST?",
      correctAnswer: ["What gap they're NOT filling that you could"],
      choices: ["Their subscriber count", "Their posting frequency", "What gap they're NOT filling that you could", "Their equipment quality"],
      explanation: "Successful positioning = finding gaps, not copying leaders."
    }]
  },
  {
    id: "cr-m1-l3", moduleId: 1, lessonIndex: 2, title: "Define your unique angle", duration: "5 min",
    questions: [{
      id: "cr-m1-l3-q1", type: "scenario",
      context: "Cooking niche is saturated. You're a software engineer who cooks.",
      prompt: "What's your unique positioning?",
      correctAnswer: ["'Engineering approach to cooking' - systematic recipes for busy techies"],
      choices: ["Just post and see what works", "'Engineering approach to cooking' - systematic recipes for busy techies", "Copy what top food YouTubers do", "Focus only on expensive dishes"],
      explanation: "Your background + topic = unique angle. This is your differentiator."
    }]
  },
  {
    id: "cr-m1-l4", moduleId: 1, lessonIndex: 3, title: "Validate niche demand", duration: "5 min",
    questions: [{
      id: "cr-m1-l4-q1", type: "multiple-choice",
      prompt: "Best way to validate if your niche has demand?",
      correctAnswer: ["Check search volume and existing content engagement"],
      choices: ["Ask friends and family", "Check search volume and existing content engagement", "Look at what's trending today", "Trust your gut feeling"],
      explanation: "Data-driven validation: YouTube search suggestions, Google Trends, competitor video views."
    }]
  },
  {
    id: "cr-m1-l5", moduleId: 1, lessonIndex: 4, title: "Create your creator persona", duration: "4 min",
    questions: [{
      id: "cr-m1-l5-q1", type: "true-false",
      prompt: "Your on-camera personality should be completely different from your real self.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Authenticity wins. Amplify your natural traits, don't fake a persona."
    }]
  },
  {
    id: "cr-m1-l6", moduleId: 1, lessonIndex: 5, title: "Define target audience", duration: "5 min",
    questions: [{
      id: "cr-m1-l6-q1", type: "scenario",
      context: "You're making tech content. You could target beginners, professionals, or everyone.",
      prompt: "Who should be your primary audience?",
      correctAnswer: ["Pick one specific segment first, expand later"],
      choices: ["Everyone - maximize reach", "Pick one specific segment first, expand later", "Only professionals - they have money", "Only beginners - more of them"],
      explanation: "Niching down = stronger connection. Broad appeal = weak positioning."
    }]
  },
  {
    id: "cr-m1-l7", moduleId: 1, lessonIndex: 6, title: "Set realistic expectations", duration: "4 min",
    questions: [{
      id: "cr-m1-l7-q1", type: "calculation",
      context: "Average creator takes 18 months to reach 10K subscribers with consistent posting.",
      prompt: "If you post 2 videos/week, how many videos before likely hitting 10K?",
      correctAnswer: ["~150 videos (18 months × 8 videos/month)"],
      choices: ["50 videos", "100 videos", "~150 videos (18 months × 8 videos/month)", "300 videos"],
      explanation: "Consistency + patience = growth. Most quit before video 50."
    }]
  },
  {
    id: "cr-m1-l8", moduleId: 1, lessonIndex: 7, title: "Commit to your niche", duration: "4 min",
    questions: [{
      id: "cr-m1-l8-q1", type: "multiple-choice",
      prompt: "How long should you stick with a niche before pivoting?",
      correctAnswer: ["At least 6 months of consistent effort"],
      choices: ["1 month if no viral video", "At least 6 months of consistent effort", "Until you hit 1000 subscribers", "Never pivot - stay forever"],
      explanation: "Give your niche time. Most 'failed' niches are just under-tested."
    }]
  }
];

// Module 2: Content Strategy (10 lessons)
export const creatorModule2Lessons: LessonData[] = [
  {
    id: "cr-m2-l1", moduleId: 2, lessonIndex: 0, title: "Define content pillars", duration: "5 min",
    questions: [{
      id: "cr-m2-l1-q1", type: "scenario",
      context: "You're a fitness creator. Need to plan content variety.",
      prompt: "How many content pillars should you have?",
      correctAnswer: ["3-4 pillars (e.g., workouts, nutrition, motivation, gear reviews)"],
      choices: ["1 - stay focused", "3-4 pillars (e.g., workouts, nutrition, motivation, gear reviews)", "10+ for variety", "No structure - post randomly"],
      explanation: "3-4 pillars = enough variety without losing focus."
    }]
  },
  {
    id: "cr-m2-l2", moduleId: 2, lessonIndex: 1, title: "Choose content formats", duration: "5 min",
    questions: [{
      id: "cr-m2-l2-q1", type: "multiple-choice",
      prompt: "For a beginner, which content format is easiest to start?",
      correctAnswer: ["Talking head with simple B-roll"],
      choices: ["Highly produced cinematic", "Talking head with simple B-roll", "Animation and motion graphics", "Live streaming daily"],
      explanation: "Start simple. Production quality can improve over time."
    }]
  },
  {
    id: "cr-m2-l3", moduleId: 2, lessonIndex: 2, title: "Create posting schedule", duration: "4 min",
    questions: [{
      id: "cr-m2-l3-q1", type: "true-false",
      prompt: "Posting daily is always better than posting weekly.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Consistency matters more than frequency. Weekly high-quality > daily burnout."
    }]
  },
  {
    id: "cr-m2-l4", moduleId: 2, lessonIndex: 3, title: "Hook writing fundamentals", duration: "6 min",
    questions: [{
      id: "cr-m2-l4-q1", type: "scenario",
      context: "Video about '5 budgeting tips'. Current hook: 'Hey guys, today we'll discuss budgeting.'",
      prompt: "Which hook is stronger?",
      correctAnswer: ["'I saved ₹2 lakhs in 6 months using these 5 rules'"],
      choices: ["'Hey guys, today we'll discuss budgeting'", "'I saved ₹2 lakhs in 6 months using these 5 rules'", "'Welcome back to my channel'", "'5 budgeting tips coming up'"],
      explanation: "Strong hooks promise specific outcomes. Create curiosity immediately."
    }]
  },
  {
    id: "cr-m2-l5", moduleId: 2, lessonIndex: 4, title: "Script structure basics", duration: "5 min",
    questions: [{
      id: "cr-m2-l5-q1", type: "multiple-choice",
      prompt: "Best script structure for educational content?",
      correctAnswer: ["Hook → Problem → Solution → Examples → CTA"],
      choices: ["Random flow of thoughts", "Hook → Problem → Solution → Examples → CTA", "Introduction → Middle → End", "Just bullet points"],
      explanation: "Clear structure = better retention. Viewers stay for organized content."
    }]
  },
  {
    id: "cr-m2-l6", moduleId: 2, lessonIndex: 5, title: "Batch content creation", duration: "5 min",
    questions: [{
      id: "cr-m2-l6-q1", type: "calculation",
      context: "Filming one video: 2 hours setup + 1 hour filming. Batching 4 videos: 2 hours setup + 3 hours filming.",
      prompt: "Time saved by batching 4 videos vs filming separately?",
      correctAnswer: ["6 hours saved"],
      choices: ["2 hours", "4 hours", "6 hours saved", "No time saved"],
      explanation: "4 separate = 12 hours. Batched = 5 hours. Save 7 hours actually (6 hours setup)."
    }]
  },
  {
    id: "cr-m2-l7", moduleId: 2, lessonIndex: 6, title: "Thumbnail strategy", duration: "5 min",
    questions: [{
      id: "cr-m2-l7-q1", type: "multiple-choice",
      prompt: "What makes a thumbnail click-worthy?",
      correctAnswer: ["Clear emotion, contrast, curiosity gap"],
      choices: ["Lots of text and details", "Clear emotion, contrast, curiosity gap", "Same style as competitors", "Just the video title"],
      explanation: "Thumbnails sell the click. Test multiple versions."
    }]
  },
  {
    id: "cr-m2-l8", moduleId: 2, lessonIndex: 7, title: "Title optimization", duration: "4 min",
    questions: [{
      id: "cr-m2-l8-q1", type: "scenario",
      context: "Video about home workout. Options: 'My Workout Routine' vs 'No-Gym Full Body Workout (20 min)'",
      prompt: "Which title performs better?",
      correctAnswer: ["'No-Gym Full Body Workout (20 min)' - specific and searchable"],
      choices: ["'My Workout Routine' - personal brand", "'No-Gym Full Body Workout (20 min)' - specific and searchable", "Both are equal", "'INSANE Workout You MUST Try!!!'"],
      explanation: "Specific titles with keywords rank better and set clear expectations."
    }]
  },
  {
    id: "cr-m2-l9", moduleId: 2, lessonIndex: 8, title: "Content calendar planning", duration: "5 min",
    questions: [{
      id: "cr-m2-l9-q1", type: "true-false",
      prompt: "You should plan content at least 2 weeks in advance.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Planning ahead reduces stress, improves quality, and ensures consistency."
    }]
  },
  {
    id: "cr-m2-l10", moduleId: 2, lessonIndex: 9, title: "Repurposing content", duration: "5 min",
    questions: [{
      id: "cr-m2-l10-q1", type: "multiple-choice",
      prompt: "One 10-minute YouTube video can become:",
      correctAnswer: ["All of the above"],
      choices: ["3-5 Instagram Reels", "A blog post", "Tweet thread + carousel", "All of the above"],
      explanation: "Repurpose everything. One piece of content = 10+ pieces across platforms."
    }]
  }
];

// Module 3: Platform Mastery (10 lessons)
export const creatorModule3Lessons: LessonData[] = [
  {
    id: "cr-m3-l1", moduleId: 3, lessonIndex: 0, title: "Understand algorithm basics", duration: "6 min",
    questions: [{
      id: "cr-m3-l1-q1", type: "multiple-choice",
      prompt: "What do social media algorithms primarily optimize for?",
      correctAnswer: ["Watch time and engagement"],
      choices: ["Subscriber count", "Watch time and engagement", "Upload frequency", "Video length"],
      explanation: "Algorithms push content that keeps users on platform longer."
    }]
  },
  {
    id: "cr-m3-l2", moduleId: 3, lessonIndex: 1, title: "YouTube SEO fundamentals", duration: "5 min",
    questions: [{
      id: "cr-m3-l2-q1", type: "scenario",
      context: "You're optimizing a video about 'making chai at home'.",
      prompt: "Where should you add keywords?",
      correctAnswer: ["Title, description, tags, spoken in video, filename"],
      choices: ["Only in title", "Only in tags", "Title, description, tags, spoken in video, filename", "Keywords don't matter"],
      explanation: "YouTube reads metadata AND transcribes audio. Cover all bases."
    }]
  },
  {
    id: "cr-m3-l3", moduleId: 3, lessonIndex: 2, title: "Instagram algorithm secrets", duration: "5 min",
    questions: [{
      id: "cr-m3-l3-q1", type: "true-false",
      prompt: "Posting Reels is more effective than static posts for growth in 2024.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Instagram prioritizes video content. Reels get 2-3x more reach than static posts."
    }]
  },
  {
    id: "cr-m3-l4", moduleId: 3, lessonIndex: 3, title: "Optimize posting times", duration: "4 min",
    questions: [{
      id: "cr-m3-l4-q1", type: "scenario",
      context: "Your analytics show audience is most active 7-9 PM. You work 9-5.",
      prompt: "When should you post?",
      correctAnswer: ["Schedule posts for 7 PM using scheduling tools"],
      choices: ["Morning before work", "During lunch break", "Schedule posts for 7 PM using scheduling tools", "Midnight when you're free"],
      explanation: "Use scheduling tools. Post when audience is active, not when you're free."
    }]
  },
  {
    id: "cr-m3-l5", moduleId: 3, lessonIndex: 4, title: "Hashtag strategy", duration: "5 min",
    questions: [{
      id: "cr-m3-l5-q1", type: "calculation",
      context: "Small hashtag: 10K posts. Medium: 100K-500K. Large: 1M+.",
      prompt: "Ideal hashtag mix for a new creator?",
      correctAnswer: ["Mix of small (50%), medium (40%), large (10%)"],
      choices: ["All large hashtags for reach", "All small for less competition", "Mix of small (50%), medium (40%), large (10%)", "Hashtags don't matter anymore"],
      explanation: "Small hashtags = easier to rank. Mix gives both visibility and ranking chance."
    }]
  },
  {
    id: "cr-m3-l6", moduleId: 3, lessonIndex: 5, title: "Analytics deep dive", duration: "6 min",
    questions: [{
      id: "cr-m3-l6-q1", type: "multiple-choice",
      prompt: "Which metric matters MOST for video performance?",
      correctAnswer: ["Average view duration percentage"],
      choices: ["Total views", "Likes count", "Average view duration percentage", "Comment count"],
      explanation: "Retention = algorithm fuel. 50%+ average view duration is excellent."
    }]
  },
  {
    id: "cr-m3-l7", moduleId: 3, lessonIndex: 6, title: "Shorts/Reels strategy", duration: "5 min",
    questions: [{
      id: "cr-m3-l7-q1", type: "true-false",
      prompt: "Shorts/Reels should always have a hook in the first 0.5 seconds.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Short-form = instant gratification. Hook immediately or lose the swipe."
    }]
  },
  {
    id: "cr-m3-l8", moduleId: 3, lessonIndex: 7, title: "Cross-platform strategy", duration: "5 min",
    questions: [{
      id: "cr-m3-l8-q1", type: "scenario",
      context: "You have limited time. YouTube, Instagram, and Twitter are options.",
      prompt: "Best approach for a beginner?",
      correctAnswer: ["Master one platform first, then expand"],
      choices: ["Post everywhere equally", "Master one platform first, then expand", "Only focus on the newest platform", "Ignore platforms, focus on website"],
      explanation: "Depth > breadth. Build strong foundation on one before expanding."
    }]
  },
  {
    id: "cr-m3-l9", moduleId: 3, lessonIndex: 8, title: "Trend surfing safely", duration: "4 min",
    questions: [{
      id: "cr-m3-l9-q1", type: "multiple-choice",
      prompt: "When should you jump on a trend?",
      correctAnswer: ["When you can add your unique spin to it"],
      choices: ["Every trending topic immediately", "When you can add your unique spin to it", "Never - stay original only", "Only if competitors do it"],
      explanation: "Trends work when authentic. Your angle + trend = viral potential."
    }]
  },
  {
    id: "cr-m3-l10", moduleId: 3, lessonIndex: 9, title: "Platform-specific optimization", duration: "5 min",
    questions: [{
      id: "cr-m3-l10-q1", type: "multiple-choice",
      prompt: "What's the ideal YouTube video length for maximum ad revenue?",
      correctAnswer: ["8+ minutes (enables mid-roll ads)"],
      choices: ["Under 1 minute", "2-5 minutes", "8+ minutes (enables mid-roll ads)", "30+ minutes only"],
      explanation: "8+ minutes = mid-roll ads. But only if content justifies length."
    }]
  }
];

// Module 4: Production Basics (8 lessons)
export const creatorModule4Lessons: LessonData[] = [
  {
    id: "cr-m4-l1", moduleId: 4, lessonIndex: 0, title: "Smartphone filming essentials", duration: "5 min",
    questions: [{
      id: "cr-m4-l1-q1", type: "multiple-choice",
      prompt: "Most important factor for video quality on phone?",
      correctAnswer: ["Good lighting"],
      choices: ["Latest phone model", "Good lighting", "Expensive lens attachments", "4K resolution"],
      explanation: "Lighting transforms any camera. Natural light near window = free studio."
    }]
  },
  {
    id: "cr-m4-l2", moduleId: 4, lessonIndex: 1, title: "Audio quality fundamentals", duration: "5 min",
    questions: [{
      id: "cr-m4-l2-q1", type: "true-false",
      prompt: "Viewers tolerate bad video more than bad audio.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "People skip videos with bad audio. Invest in a ₹1000-2000 lav mic first."
    }]
  },
  {
    id: "cr-m4-l3", moduleId: 4, lessonIndex: 2, title: "Basic lighting setup", duration: "6 min",
    questions: [{
      id: "cr-m4-l3-q1", type: "scenario",
      context: "Budget: ₹2000. Room has one window.",
      prompt: "Best lighting setup?",
      correctAnswer: ["Face the window + ₹1500 ring light for fill"],
      choices: ["Buy ₹2000 ring light only", "Face the window + ₹1500 ring light for fill", "Multiple cheap LEDs", "Wait for bigger budget"],
      explanation: "Window = free key light. Ring light fills shadows. Best budget combo."
    }]
  },
  {
    id: "cr-m4-l4", moduleId: 4, lessonIndex: 3, title: "Framing and composition", duration: "5 min",
    questions: [{
      id: "cr-m4-l4-q1", type: "multiple-choice",
      prompt: "Where should your eyes be in frame for talking-head videos?",
      correctAnswer: ["Upper third of the frame"],
      choices: ["Center of frame", "Upper third of the frame", "Lower third", "Anywhere is fine"],
      explanation: "Rule of thirds: eyes at upper third = professional framing."
    }]
  },
  {
    id: "cr-m4-l5", moduleId: 4, lessonIndex: 4, title: "Basic editing workflow", duration: "6 min",
    questions: [{
      id: "cr-m4-l5-q1", type: "multiple-choice",
      prompt: "Best free editing software for beginners?",
      correctAnswer: ["CapCut or DaVinci Resolve"],
      choices: ["Adobe Premiere Pro", "CapCut or DaVinci Resolve", "Final Cut Pro", "Windows Movie Maker"],
      explanation: "CapCut = easy mobile/desktop. DaVinci = pro-level and free."
    }]
  },
  {
    id: "cr-m4-l6", moduleId: 4, lessonIndex: 5, title: "Jump cuts and pacing", duration: "5 min",
    questions: [{
      id: "cr-m4-l6-q1", type: "true-false",
      prompt: "Jump cuts every 3-5 seconds keep viewers engaged.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Modern viewers expect fast pacing. Cut dead air and filler."
    }]
  },
  {
    id: "cr-m4-l7", moduleId: 4, lessonIndex: 6, title: "Music and sound effects", duration: "5 min",
    questions: [{
      id: "cr-m4-l7-q1", type: "scenario",
      context: "You want background music but worried about copyright.",
      prompt: "Safest option?",
      correctAnswer: ["YouTube Audio Library or Epidemic Sound subscription"],
      choices: ["Use any popular song - fair use", "YouTube Audio Library or Epidemic Sound subscription", "No music at all", "Credit the artist in description"],
      explanation: "Royalty-free libraries = safe. Copyright strikes can delete your channel."
    }]
  },
  {
    id: "cr-m4-l8", moduleId: 4, lessonIndex: 7, title: "Export settings guide", duration: "4 min",
    questions: [{
      id: "cr-m4-l8-q1", type: "multiple-choice",
      prompt: "Standard export settings for YouTube?",
      correctAnswer: ["1080p, 30fps, H.264 codec, high bitrate"],
      choices: ["720p to upload faster", "1080p, 30fps, H.264 codec, high bitrate", "4K always for quality", "Depends on video length"],
      explanation: "1080p is standard. 4K only if filmed in 4K. H.264 is universally compatible."
    }]
  }
];

// Module 5: Building Audience (10 lessons)
export const creatorModule5Lessons: LessonData[] = [
  {
    id: "cr-m5-l1", moduleId: 5, lessonIndex: 0, title: "First 100 subscribers strategy", duration: "5 min",
    questions: [{
      id: "cr-m5-l1-q1", type: "multiple-choice",
      prompt: "Fastest way to get first 100 subscribers?",
      correctAnswer: ["Engage in relevant communities and share value"],
      choices: ["Buy subscribers", "Engage in relevant communities and share value", "Wait for algorithm to find you", "Only focus on content quality"],
      explanation: "Active participation in niche communities = targeted initial audience."
    }]
  },
  {
    id: "cr-m5-l2", moduleId: 5, lessonIndex: 1, title: "Community engagement tactics", duration: "5 min",
    questions: [{
      id: "cr-m5-l2-q1", type: "true-false",
      prompt: "Replying to every comment in the first hour boosts algorithm performance.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Early engagement signals tell algorithm the content is valuable."
    }]
  },
  {
    id: "cr-m5-l3", moduleId: 5, lessonIndex: 2, title: "Collaboration strategies", duration: "6 min",
    questions: [{
      id: "cr-m5-l3-q1", type: "scenario",
      context: "You have 500 subs. Want to collab. Options: 100K creator, 5K creator, 500 sub creator.",
      prompt: "Best collaboration target?",
      correctAnswer: ["Similar size (500-2K) or slightly larger (2K-5K)"],
      choices: ["100K creator - more exposure", "Similar size (500-2K) or slightly larger (2K-5K)", "Only larger creators", "No collabs until 10K"],
      explanation: "Similar size = equal value exchange. Large creators rarely collab down."
    }]
  },
  {
    id: "cr-m5-l4", moduleId: 5, lessonIndex: 3, title: "Call-to-action optimization", duration: "5 min",
    questions: [{
      id: "cr-m5-l4-q1", type: "multiple-choice",
      prompt: "When should you ask viewers to subscribe?",
      correctAnswer: ["After providing value, not at the beginning"],
      choices: ["First 10 seconds", "After providing value, not at the beginning", "Only at the end", "Never - let them decide"],
      explanation: "Earn the ask. Provide value first, then CTA feels natural."
    }]
  },
  {
    id: "cr-m5-l5", moduleId: 5, lessonIndex: 4, title: "Building email list", duration: "5 min",
    questions: [{
      id: "cr-m5-l5-q1", type: "true-false",
      prompt: "Email list is more valuable than social followers because you own the relationship.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Platforms change algorithms. Email list = direct access forever."
    }]
  },
  {
    id: "cr-m5-l6", moduleId: 5, lessonIndex: 5, title: "Community building beyond content", duration: "5 min",
    questions: [{
      id: "cr-m5-l6-q1", type: "multiple-choice",
      prompt: "Best platform for building a tight-knit community?",
      correctAnswer: ["Discord or Telegram group"],
      choices: ["Instagram comments", "Discord or Telegram group", "Twitter threads", "YouTube community tab"],
      explanation: "Dedicated spaces = deeper relationships. Comments are too scattered."
    }]
  },
  {
    id: "cr-m5-l7", moduleId: 5, lessonIndex: 6, title: "Handling negative feedback", duration: "4 min",
    questions: [{
      id: "cr-m5-l7-q1", type: "scenario",
      context: "Comment says: 'This video is useless, you don't know anything.'",
      prompt: "Best response?",
      correctAnswer: ["Ignore trolls, respond constructively to genuine criticism"],
      choices: ["Delete the comment", "Argue back with facts", "Ignore trolls, respond constructively to genuine criticism", "Disable comments"],
      explanation: "Not all criticism is equal. Engage constructive feedback, ignore trolls."
    }]
  },
  {
    id: "cr-m5-l8", moduleId: 5, lessonIndex: 7, title: "Cross-promotion tactics", duration: "5 min",
    questions: [{
      id: "cr-m5-l8-q1", type: "multiple-choice",
      prompt: "How to drive Instagram followers to YouTube?",
      correctAnswer: ["Tease exclusive content and use link in bio"],
      choices: ["Just post the link", "Tease exclusive content and use link in bio", "Buy ads", "Don't - keep audiences separate"],
      explanation: "Give a reason to switch platforms. Exclusive content = motivation."
    }]
  },
  {
    id: "cr-m5-l9", moduleId: 5, lessonIndex: 8, title: "Leveraging trending topics", duration: "5 min",
    questions: [{
      id: "cr-m5-l9-q1", type: "true-false",
      prompt: "Trending topics can give you 10x normal views if timed correctly.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Trend + speed = viral potential. First 24-48 hours matter most."
    }]
  },
  {
    id: "cr-m5-l10", moduleId: 5, lessonIndex: 9, title: "Audience retention strategies", duration: "5 min",
    questions: [{
      id: "cr-m5-l10-q1", type: "multiple-choice",
      prompt: "What keeps viewers watching till the end?",
      correctAnswer: ["Open loops and promised payoffs"],
      choices: ["Longer videos", "Open loops and promised payoffs", "More graphics", "Talking faster"],
      explanation: "Promise something at start, deliver at end. Open loops create curiosity."
    }]
  }
];

// Module 6: Monetization Paths (10 lessons)
export const creatorModule6Lessons: LessonData[] = [
  {
    id: "cr-m6-l1", moduleId: 6, lessonIndex: 0, title: "YouTube monetization requirements", duration: "5 min",
    questions: [{
      id: "cr-m6-l1-q1", type: "calculation",
      context: "Requirements: 1000 subscribers + 4000 watch hours OR 1000 subs + 10M Shorts views.",
      prompt: "If you average 100 views per video with 5-min watch time, videos needed for 4000 hours?",
      correctAnswer: ["4800 videos (impractical - focus on growing views first)"],
      choices: ["400 videos", "800 videos", "4800 videos (impractical - focus on growing views first)", "4000 videos"],
      explanation: "4000 hours = 240,000 minutes. 100 views × 5 min = 500 min/video. 480 videos. Focus on growth."
    }]
  },
  {
    id: "cr-m6-l2", moduleId: 6, lessonIndex: 1, title: "Brand deal basics", duration: "6 min",
    questions: [{
      id: "cr-m6-l2-q1", type: "scenario",
      context: "Brand offers ₹5000 for a dedicated video. You have 10K subscribers.",
      prompt: "Is this a fair rate?",
      correctAnswer: ["Too low - standard is ₹1-2 per subscriber for integrations"],
      choices: ["Great deal for a beginner", "Too low - standard is ₹1-2 per subscriber for integrations", "Fair market rate", "Depends on the brand"],
      explanation: "10K subs = ₹10K-20K for integration. Dedicated video = 2-3x more."
    }]
  },
  {
    id: "cr-m6-l3", moduleId: 6, lessonIndex: 2, title: "Affiliate marketing setup", duration: "5 min",
    questions: [{
      id: "cr-m6-l3-q1", type: "multiple-choice",
      prompt: "Best affiliate programs for Indian creators?",
      correctAnswer: ["Amazon Associates, Flipkart, and niche-specific programs"],
      choices: ["International programs only", "Amazon Associates, Flipkart, and niche-specific programs", "Only work with brands directly", "Affiliate marketing doesn't work in India"],
      explanation: "Amazon India pays 1-10%. Niche products often have higher commissions."
    }]
  },
  {
    id: "cr-m6-l4", moduleId: 6, lessonIndex: 3, title: "Creating digital products", duration: "6 min",
    questions: [{
      id: "cr-m6-l4-q1", type: "true-false",
      prompt: "You need 100K followers before launching a digital product.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "1000 true fans can sustain a business. Start with small, focused products."
    }]
  },
  {
    id: "cr-m6-l5", moduleId: 6, lessonIndex: 4, title: "Pricing your offerings", duration: "5 min",
    questions: [{
      id: "cr-m6-l5-q1", type: "scenario",
      context: "Creating a video editing course. Time investment: 50 hours. Similar courses: ₹2000-5000.",
      prompt: "How should you price?",
      correctAnswer: ["Start at ₹1999-2499 to build reviews, increase later"],
      choices: ["₹499 to get more sales", "Start at ₹1999-2499 to build reviews, increase later", "₹9999 for premium positioning", "Free to build audience"],
      explanation: "Launch pricing builds reviews. Increase as testimonials grow."
    }]
  },
  {
    id: "cr-m6-l6", moduleId: 6, lessonIndex: 5, title: "Merchandise and physical products", duration: "5 min",
    questions: [{
      id: "cr-m6-l6-q1", type: "multiple-choice",
      prompt: "When should you launch merchandise?",
      correctAnswer: ["When audience actively asks for it"],
      choices: ["Immediately to monetize", "When audience actively asks for it", "After 100K subscribers only", "Never - focus on digital"],
      explanation: "Merch without demand = wasted inventory. Let audience pull for it."
    }]
  },
  {
    id: "cr-m6-l7", moduleId: 6, lessonIndex: 6, title: "Memberships and subscriptions", duration: "5 min",
    questions: [{
      id: "cr-m6-l7-q1", type: "calculation",
      context: "YouTube membership: ₹59/month, YouTube takes 30%. You have 200 members.",
      prompt: "Monthly membership income?",
      correctAnswer: ["₹8,260 (200 × ₹59 × 70%)"],
      choices: ["₹11,800", "₹8,260 (200 × ₹59 × 70%)", "₹5,900", "₹3,540"],
      explanation: "After 30% cut: ₹59 × 0.7 × 200 = ₹8,260/month. Recurring income."
    }]
  },
  {
    id: "cr-m6-l8", moduleId: 6, lessonIndex: 7, title: "Consulting and services", duration: "5 min",
    questions: [{
      id: "cr-m6-l8-q1", type: "true-false",
      prompt: "1-on-1 consulting is the highest per-hour income for most creators.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Direct expertise = premium pricing. ₹2000-10000/hour common for established creators."
    }]
  },
  {
    id: "cr-m6-l9", moduleId: 6, lessonIndex: 8, title: "Diversifying income streams", duration: "5 min",
    questions: [{
      id: "cr-m6-l9-q1", type: "scenario",
      context: "90% of your income is from brand deals. One brand drops you.",
      prompt: "What's the risk mitigation strategy?",
      correctAnswer: ["No single source should exceed 30% of income"],
      choices: ["Find another brand quickly", "No single source should exceed 30% of income", "This is normal, adapt", "Stop doing brand deals"],
      explanation: "Diversification = stability. Build multiple income pillars."
    }]
  },
  {
    id: "cr-m6-l10", moduleId: 6, lessonIndex: 9, title: "Negotiating brand deals", duration: "6 min",
    questions: [{
      id: "cr-m6-l10-q1", type: "multiple-choice",
      prompt: "Brand offers ₹10K. You want ₹20K. Best negotiation approach?",
      correctAnswer: ["Counter with ₹25K, settle around ₹18-20K"],
      choices: ["Accept ₹10K to build relationship", "Counter with ₹25K, settle around ₹18-20K", "Demand exactly ₹20K", "Reject and wait for better offer"],
      explanation: "Start high to negotiate down. Show value through engagement metrics."
    }]
  }
];

// Module 7: Legal & Finance (8 lessons)
export const creatorModule7Lessons: LessonData[] = [
  {
    id: "cr-m7-l1", moduleId: 7, lessonIndex: 0, title: "Register as a business", duration: "5 min",
    questions: [{
      id: "cr-m7-l1-q1", type: "scenario",
      context: "Earning ₹3L/year from content. Operating from home.",
      prompt: "Do you need to register a business?",
      correctAnswer: ["Yes - register as sole proprietorship for tax and brand deal purposes"],
      choices: ["No - too small", "Yes - register as sole proprietorship for tax and brand deal purposes", "Only after ₹10L", "Only if full-time"],
      explanation: "Registration enables GST (for brand deals), bank accounts, and professionalism."
    }]
  },
  {
    id: "cr-m7-l2", moduleId: 7, lessonIndex: 1, title: "Understanding creator taxes", duration: "6 min",
    questions: [{
      id: "cr-m7-l2-q1", type: "calculation",
      context: "Income: ₹8L. Old regime: 5% on ₹2.5-5L, 20% on ₹5-10L.",
      prompt: "Approximate tax liability?",
      correctAnswer: ["₹72,500 (₹12,500 + ₹60,000)"],
      choices: ["₹40,000", "₹72,500 (₹12,500 + ₹60,000)", "₹1,60,000", "₹0 - below threshold"],
      explanation: "5% on ₹2.5L = ₹12,500. 20% on ₹3L = ₹60,000. Total ≈ ₹72,500 before deductions."
    }]
  },
  {
    id: "cr-m7-l3", moduleId: 7, lessonIndex: 2, title: "GST for creators", duration: "5 min",
    questions: [{
      id: "cr-m7-l3-q1", type: "true-false",
      prompt: "GST registration is mandatory for all brand deals regardless of income.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "GST mandatory only above ₹20L turnover. But brands prefer GST-registered creators."
    }]
  },
  {
    id: "cr-m7-l4", moduleId: 7, lessonIndex: 3, title: "Copyright basics for creators", duration: "5 min",
    questions: [{
      id: "cr-m7-l4-q1", type: "multiple-choice",
      prompt: "Using 10 seconds of a Bollywood song in your video is:",
      correctAnswer: ["Copyright infringement without license"],
      choices: ["Fair use - it's short", "Copyright infringement without license", "Allowed if you credit", "Allowed for educational content"],
      explanation: "No duration is 'safe.' Any copyrighted music needs license or royalty-free."
    }]
  },
  {
    id: "cr-m7-l5", moduleId: 7, lessonIndex: 4, title: "Brand deal contracts", duration: "6 min",
    questions: [{
      id: "cr-m7-l5-q1", type: "scenario",
      context: "Contract says brand owns your content 'in perpetuity' with 'exclusive rights.'",
      prompt: "Should you sign?",
      correctAnswer: ["No - negotiate limited period (1-2 years) and non-exclusive"],
      choices: ["Yes - standard clause", "No - negotiate limited period (1-2 years) and non-exclusive", "Sign if payment is good", "Only sign if they're a big brand"],
      explanation: "Perpetuity + exclusive = they own your content forever. Never acceptable."
    }]
  },
  {
    id: "cr-m7-l6", moduleId: 7, lessonIndex: 5, title: "Managing creator finances", duration: "5 min",
    questions: [{
      id: "cr-m7-l6-q1", type: "calculation",
      context: "Monthly income: ₹50K. Expenses: ₹15K. Taxes: 20%.",
      prompt: "How much should you save for taxes monthly?",
      correctAnswer: ["₹7,000 (20% of ₹35K profit)"],
      choices: ["₹10,000", "₹7,000 (20% of ₹35K profit)", "₹3,000", "₹0 - pay annually"],
      explanation: "Set aside tax portion monthly. Don't spend and scramble at year-end."
    }]
  },
  {
    id: "cr-m7-l7", moduleId: 7, lessonIndex: 6, title: "Protecting your brand", duration: "5 min",
    questions: [{
      id: "cr-m7-l7-q1", type: "true-false",
      prompt: "You should trademark your channel name once you gain traction.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Trademark protects your brand. Someone else could register your name otherwise."
    }]
  },
  {
    id: "cr-m7-l8", moduleId: 7, lessonIndex: 7, title: "Disclosure requirements", duration: "4 min",
    questions: [{
      id: "cr-m7-l8-q1", type: "multiple-choice",
      prompt: "When must you disclose a paid partnership?",
      correctAnswer: ["Always - at the start of content and in description"],
      choices: ["Only if brand asks", "Always - at the start of content and in description", "Only for products you dislike", "Only on YouTube, not Instagram"],
      explanation: "ASCI guidelines require clear disclosure. #ad or 'Paid partnership' mandatory."
    }]
  }
];

// Module 8: Scaling Up (8 lessons)
export const creatorModule8Lessons: LessonData[] = [
  {
    id: "cr-m8-l1", moduleId: 8, lessonIndex: 0, title: "When to hire help", duration: "5 min",
    questions: [{
      id: "cr-m8-l1-q1", type: "scenario",
      context: "Editing takes 10 hours/week. You could make ₹5000/hour from brand deals in that time.",
      prompt: "Should you hire an editor at ₹15K/month?",
      correctAnswer: ["Yes - you'd make ₹2L in those 40 hours vs spending ₹15K"],
      choices: ["No - save money", "Yes - you'd make ₹2L in those 40 hours vs spending ₹15K", "Only after 100K subs", "Do both somehow"],
      explanation: "Opportunity cost calculation. Your time is worth more on high-value tasks."
    }]
  },
  {
    id: "cr-m8-l2", moduleId: 8, lessonIndex: 1, title: "Building a content team", duration: "5 min",
    questions: [{
      id: "cr-m8-l2-q1", type: "multiple-choice",
      prompt: "First hire for a content creator should typically be:",
      correctAnswer: ["Video editor"],
      choices: ["Manager", "Video editor", "Scriptwriter", "Social media manager"],
      explanation: "Editing is most time-consuming. Free up that time first."
    }]
  },
  {
    id: "cr-m8-l3", moduleId: 8, lessonIndex: 2, title: "Systems and automation", duration: "6 min",
    questions: [{
      id: "cr-m8-l3-q1", type: "true-false",
      prompt: "You should document your processes before hiring anyone.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "SOPs = consistent quality. New hires can follow documented processes."
    }]
  },
  {
    id: "cr-m8-l4", moduleId: 8, lessonIndex: 3, title: "Multi-platform expansion", duration: "5 min",
    questions: [{
      id: "cr-m8-l4-q1", type: "scenario",
      context: "You've mastered YouTube. Instagram and podcast are options.",
      prompt: "Best expansion strategy?",
      correctAnswer: ["Repurpose YouTube content to Instagram first (easier)"],
      choices: ["Start completely fresh on new platform", "Repurpose YouTube content to Instagram first (easier)", "Launch both simultaneously", "Stay on YouTube only"],
      explanation: "Repurposing is efficient. New formats need new skills - expand gradually."
    }]
  },
  {
    id: "cr-m8-l5", moduleId: 8, lessonIndex: 4, title: "Creator burnout prevention", duration: "5 min",
    questions: [{
      id: "cr-m8-l5-q1", type: "multiple-choice",
      prompt: "Best way to prevent creator burnout?",
      correctAnswer: ["Batch content and take regular breaks"],
      choices: ["Post less frequently", "Batch content and take regular breaks", "Ignore the feeling and push through", "Quit and restart later"],
      explanation: "Batching = efficiency. Scheduled breaks = sustainability. Plan for rest."
    }]
  },
  {
    id: "cr-m8-l6", moduleId: 8, lessonIndex: 5, title: "Building sustainable income", duration: "5 min",
    questions: [{
      id: "cr-m8-l6-q1", type: "calculation",
      context: "Goal: ₹1L/month passive income. Course priced at ₹2000. One-time buyer.",
      prompt: "Monthly sales needed?",
      correctAnswer: ["50 sales/month"],
      choices: ["25 sales", "50 sales/month", "100 sales", "200 sales"],
      explanation: "₹1,00,000 ÷ ₹2,000 = 50 sales. Evergreen content + automation = passive."
    }]
  },
  {
    id: "cr-m8-l7", moduleId: 8, lessonIndex: 6, title: "Long-term brand building", duration: "5 min",
    questions: [{
      id: "cr-m8-l7-q1", type: "true-false",
      prompt: "Your personal brand should eventually be bigger than any single platform.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Platforms change. Personal brand transcends algorithms. Build owned assets."
    }]
  },
  {
    id: "cr-m8-l8", moduleId: 8, lessonIndex: 7, title: "Exit strategies and legacy", duration: "4 min",
    questions: [{
      id: "cr-m8-l8-q1", type: "multiple-choice",
      prompt: "How can a creator channel become a sellable asset?",
      correctAnswer: ["Systematize operations so it runs without you"],
      choices: ["It can't - it's personal", "Systematize operations so it runs without you", "Only by getting millions of subs", "Sell to a network early"],
      explanation: "Documented systems + team = business asset. Personal channels can become media companies."
    }]
  }
];

// Export all creator lessons
export const allCreatorLessons: LessonData[] = [
  ...creatorModule1Lessons,
  ...creatorModule2Lessons,
  ...creatorModule3Lessons,
  ...creatorModule4Lessons,
  ...creatorModule5Lessons,
  ...creatorModule6Lessons,
  ...creatorModule7Lessons,
  ...creatorModule8Lessons,
];
