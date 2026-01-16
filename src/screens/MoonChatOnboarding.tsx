import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MoonChatOnboardingProps {
  onComplete: (userData: {
    name: string;
    businessType: string;
    cuisine: string;
    location: string;
    investment: string;
    kitchenName: string;
  }) => void;
}

interface Message {
  id: string;
  role: "moon" | "user";
  content: string;
  options?: string[];
  isTyping?: boolean;
}

// Conversation flow stages
type Stage = 
  | "opening"
  | "background" 
  | "idea"
  | "assets"
  | "goal"
  | "risk"
  | "direction"
  | "generating"
  | "complete";

// Random progress increment helper
const getRandomIncrement = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const MoonChatOnboarding = ({ onComplete }: MoonChatOnboardingProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [stage, setStage] = useState<Stage>("opening");
  const [claritySignal, setClaritySignal] = useState(10);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState({
    background: "",
    hasIdea: "",
    assets: "",
    goal: "",
    risk: "",
    direction: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial message on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      addMoonMessage(
        "Hey, I'm Moon.\n\nI'll help you get clear on what to build and how to think about it.\n\nI'll ask a few questions — you don't need perfect answers."
      );
      setTimeout(() => {
        addMoonMessage("What's your current background or work experience?");
        setStage("background");
      }, 1500);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addMoonMessage = (content: string, options?: string[]) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "moon",
          content,
          options,
        }
      ]);
    }, 800 + Math.random() * 400);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "user",
        content,
      }
    ]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userInput = inputValue.trim();
    addUserMessage(userInput);
    setInputValue("");
    
    processUserInput(userInput);
  };

  const handleOptionSelect = (option: string) => {
    addUserMessage(option);
    processUserInput(option);
  };

  const processUserInput = (input: string) => {
    switch (stage) {
      case "background":
        setUserData(prev => ({ ...prev, background: input }));
        setClaritySignal(prev => Math.min(prev + getRandomIncrement(8, 15), 25));
        setTimeout(() => {
          addMoonMessage("Got it. Do you already have an idea, or are you exploring?", [
            "I have a specific idea",
            "I'm still exploring",
            "I have a few directions in mind"
          ]);
          setStage("idea");
        }, 500);
        break;

      case "idea":
        setUserData(prev => ({ ...prev, hasIdea: input }));
        setClaritySignal(prev => Math.min(prev + getRandomIncrement(10, 18), 45));
        setTimeout(() => {
          addMoonMessage("Do you have any assets that might matter?\n\n(skills, time, money, location, network)");
          setStage("assets");
        }, 500);
        break;

      case "assets":
        setUserData(prev => ({ ...prev, assets: input }));
        setClaritySignal(prev => Math.min(prev + getRandomIncrement(12, 20), 65));
        setTimeout(() => {
          addMoonMessage("What does success look like right now?", [
            "Learning the ropes first",
            "Generating income quickly",
            "Building something big"
          ]);
          setStage("goal");
        }, 500);
        break;

      case "goal":
        setUserData(prev => ({ ...prev, goal: input }));
        setClaritySignal(prev => Math.min(prev + getRandomIncrement(10, 15), 78));
        setTimeout(() => {
          addMoonMessage("How much uncertainty are you comfortable with?", [
            "I prefer proven models",
            "Some risk is fine",
            "I'm ready for high risk, high reward"
          ]);
          setStage("risk");
        }, 500);
        break;

      case "risk":
        setUserData(prev => ({ ...prev, risk: input }));
        setClaritySignal(prev => Math.min(prev + getRandomIncrement(8, 12), 88));
        setTimeout(() => {
          addMoonMessage("I'm starting to see a few strong directions that fit you.\n\nBased on what you've shared, here are paths that make sense:");
          setTimeout(() => {
            addMoonMessage("Pick one that resonates:", [
              "🍳 Cloud Kitchen — Delivery-only food business",
              "🏠 Local Asset Monetization — Leverage what you have",
              "💼 Skill-led Solo Business — Productize your expertise"
            ]);
            setStage("direction");
          }, 1200);
        }, 500);
        break;

      case "direction":
        setUserData(prev => ({ ...prev, direction: input }));
        // Set to 100% right before generating the path
        setClaritySignal(100);
        setTimeout(() => {
          setStage("generating");
          addMoonMessage("Mapping a personalized business path…");
          
          // Simulate generation delay
          setTimeout(() => {
            setStage("complete");
            setMessages(prev => [
              ...prev,
              {
                id: "path-ready",
                role: "moon",
                content: "PATH_READY",
              }
            ]);
          }, 2500);
        }, 500);
        break;
    }
  };

  const handleEnterPath = () => {
    // Extract clean business name from selection
    const directionMap: Record<string, { type: string; name: string }> = {
      "🍳 Cloud Kitchen — Delivery-only food business": { type: "cloud-kitchen", name: "Cloud Kitchen" },
      "🏠 Local Asset Monetization — Leverage what you have": { type: "asset-monetization", name: "Local Asset Monetization" },
      "💼 Skill-led Solo Business — Productize your expertise": { type: "skill-business", name: "Skill-led Solo Business" },
    };
    
    const selected = directionMap[userData.direction] || { type: "cloud-kitchen", name: "Cloud Kitchen" };
    
    onComplete({
      name: userData.background.split(" ")[0] || "Founder",
      businessType: selected.type,
      cuisine: "Multi-Cuisine",
      location: "India",
      investment: "₹2-5 Lakhs",
      kitchenName: selected.name,
    });
  };

  const progress = claritySignal;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Fixed Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
          {/* Moon Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-secondary text-base leading-tight">Moon</h1>
              <p className="text-xs text-muted-foreground">Your AI Guide</p>
            </div>
          </div>

          {/* Clarity Signal - Compact */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg className="w-11 h-11 -rotate-90">
                {/* Background circle */}
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="3"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 18}
                  initial={{ strokeDashoffset: 2 * Math.PI * 18 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 18 - (progress / 100) * 2 * Math.PI * 18 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-secondary">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="max-w-lg mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.content === "PATH_READY" ? (
                  <motion.div
                    className="w-full max-w-sm bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary rounded-2xl p-6"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary text-lg">Your Business Path is Ready</h3>
                        <p className="text-sm text-muted-foreground">Built for your goals & constraints</p>
                      </div>
                    </div>
                    <Button 
                      onClick={handleEnterPath}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                    >
                      Enter Path →
                    </Button>
                  </motion.div>
                ) : (
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border border-border text-secondary rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                    
                    {/* Option buttons */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(option)}
                            className="w-full text-left px-3 py-2 rounded-lg bg-background/50 hover:bg-background border border-border/50 text-sm text-secondary transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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

      {/* Input Area */}
      {stage !== "generating" && stage !== "complete" && (
        <motion.div 
          className="flex-shrink-0 p-4 border-t border-border bg-background"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="max-w-lg mx-auto flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your answer..."
              className="flex-1 bg-card border-border"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MoonChatOnboarding;
