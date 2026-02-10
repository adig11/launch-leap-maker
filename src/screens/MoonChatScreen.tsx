import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import MobileLayout from "@/components/MobileLayout";

interface MoonChatScreenProps {
  activeTab: "home" | "journey" | "moon" | "profile";
  onTabChange: (tab: "home" | "journey" | "moon" | "profile") => void;
}

interface Message {
  id: string;
  role: "moon" | "user";
  content: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_CONTEXT = `You are Moon, a calm, sharp AI mentor for Indian entrepreneurs using the Moonshot app. 
You help users with any business-related questions — strategy, marketing, legal basics, finance, operations, mindset, etc.
- Be warm but focused. No fluff.
- Speak in short, clear sentences.
- Give actionable, India-specific advice when possible.
- You are NOT doing onboarding discovery here — the user has already started their journey.
- If asked about legal/financial specifics, remind them this is educational guidance, not professional advice.
- Keep responses concise (2-4 paragraphs max unless they ask for detail).`;

const MoonChatScreen = ({ activeTab, onTabChange }: MoonChatScreenProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Welcome message on mount
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "moon",
          content: "Hey! I'm Moon, your business mentor.\n\nAsk me anything — strategy, marketing, legal steps, finances, or just thinking out loud. I'm here.",
        },
      ]);
    }
  }, []);

  const sendMessage = async (userInput: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userInput,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    const newHistory: ChatMessage[] = [
      ...chatHistory,
      { role: "user", content: userInput },
    ];
    setChatHistory(newHistory);
    setIsTyping(true);

    try {
      const { data, error } = await supabase.functions.invoke("moon-chat", {
        body: {
          messages: newHistory,
          systemOverride: SYSTEM_CONTEXT,
        },
      });

      if (error) throw error;

      const content = data?.content;
      if (content) {
        // Strip JSON wrapper if the LLM returns one
        let text = content;
        try {
          const parsed = JSON.parse(content);
          text = parsed.message || parsed.content || content;
        } catch {
          // plain text, use as-is
        }

        setChatHistory((prev) => [...prev, { role: "assistant", content: text }]);
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: "moon", content: text },
        ]);
      }
    } catch (error) {
      console.error("Moon chat error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;
    sendMessage(inputValue.trim());
  };

  return (
    <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
      <div className="flex flex-col h-[calc(100vh-80px)]">
        {/* Header */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-secondary text-base leading-tight">Moon</h1>
              <p className="text-xs text-muted-foreground">Your AI Mentor</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border border-border text-secondary rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-muted-foreground rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="flex-shrink-0 p-4 border-t border-border bg-background">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask Moon anything..."
              className="flex-1 bg-card border-border"
              disabled={isTyping}
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MoonChatScreen;
