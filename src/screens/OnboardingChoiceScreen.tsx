import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@/components/icons";

interface OnboardingChoiceScreenProps {
  onHaveIdea: () => void;
  onBrainstorm: () => void;
}

const OnboardingChoiceScreen = ({ onHaveIdea, onBrainstorm }: OnboardingChoiceScreenProps) => {
  const [selected, setSelected] = useState<"idea" | "brainstorm" | null>(null);

  const handleContinue = () => {
    if (selected === "idea") onHaveIdea();
    else if (selected === "brainstorm") onBrainstorm();
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3] subtle-grid flex flex-col relative overflow-hidden">
      {/* Header with back button and step indicator */}
      <motion.div 
        className="px-5 pt-6 pb-4 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-secondary">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-sm font-medium text-primary">Step 1 of 3</span>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary leading-tight">
              Select your path.
            </h1>
            <p className="text-muted-foreground mt-2">
              Choose how you want to start your founder<br />journey today.
            </p>
          </div>

          {/* Choice cards */}
          <div className="space-y-3">
            {/* Option 1: I have an idea */}
            <motion.button
              onClick={() => setSelected("idea")}
              className={`w-full p-5 rounded-2xl bg-white border-2 transition-all flex items-center gap-4 text-left ${
                selected === "idea" 
                  ? "border-primary shadow-md" 
                  : "border-transparent shadow-sm hover:shadow-md"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FDF0E8] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" fill="currentColor"/>
                  <rect x="9" y="20" width="6" height="2" rx="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-secondary text-lg">I have an idea</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Refine your vision and<br />start building your product.
                </p>
              </div>
              {selected === "idea" && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                    <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.button>

            {/* Option 2: I want to brainstorm */}
            <motion.button
              onClick={() => setSelected("brainstorm")}
              className={`w-full p-5 rounded-2xl bg-white border-2 transition-all flex items-center gap-4 text-left ${
                selected === "brainstorm" 
                  ? "border-primary shadow-md" 
                  : "border-transparent shadow-sm hover:shadow-md"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FDF0E8] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2V4M12 20V22M2 12H4M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-secondary text-lg">I want to brainstorm</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Explore white spaces and<br />find your next big thing.
                </p>
              </div>
              {selected === "brainstorm" ? (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                    <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div 
        className="px-5 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button 
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full py-6 text-base font-semibold rounded-2xl transition-all ${
            selected 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
              : "bg-[#E8DDD6] text-muted-foreground cursor-not-allowed"
          }`}
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default OnboardingChoiceScreen;
