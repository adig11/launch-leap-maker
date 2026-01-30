import { motion } from "framer-motion";
import { ChevronRightIcon } from "@/components/icons";

interface OnboardingChoiceScreenProps {
  onHaveIdea: () => void;
  onBrainstorm: () => void;
}

// Lightbulb icon for "I have an idea"
const LightbulbIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 6C17.373 6 12 11.373 12 18C12 22.5 14.5 26.3 18 28.5V34C18 35.1 18.9 36 20 36H28C29.1 36 30 35.1 30 34V28.5C33.5 26.3 36 22.5 36 18C36 11.373 30.627 6 24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 40H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 44H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 12V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 18H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Chat/brainstorm icon
const BrainstormIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 20C16 20 18 16 24 16C30 16 32 20 32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="17" cy="26" r="2" fill="currentColor"/>
    <circle cx="24" cy="28" r="2" fill="currentColor"/>
    <circle cx="31" cy="26" r="2" fill="currentColor"/>
    <path d="M18 34C18 34 20 32 24 32C28 32 30 34 30 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Moon icon for chat
const MoonIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M36 28C36 36.284 29.284 43 21 43C12.716 43 6 36.284 6 28C6 19.716 12.716 13 21 13C21.338 13 21.674 13.01 22.008 13.029C19.548 15.892 18 19.588 18 23.5C18 31.232 24.268 37.5 32 37.5C33.942 37.5 35.796 37.114 37.492 36.416C36.514 33.708 36 30.812 36 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="40" cy="20" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="38" cy="8" r="1.5" fill="currentColor"/>
  </svg>
);

const OnboardingChoiceScreen = ({ onHaveIdea, onBrainstorm }: OnboardingChoiceScreenProps) => {
  return (
    <div className="min-h-screen bg-[#F8F6F3] flex flex-col relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header */}
      <motion.div 
        className="px-5 pt-6 pb-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8B4A6] to-[#D4A394] flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-secondary">Moonshot</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title section */}
          <div className="mb-8">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">Getting Started</p>
            <h1 className="text-3xl font-bold text-secondary leading-tight">
              Where are you in your<br/>founder journey?
            </h1>
          </div>

          {/* Choice cards */}
          <div className="space-y-4">
            {/* Option 1: I have an idea */}
            <motion.button
              onClick={onHaveIdea}
              className="w-full p-5 rounded-2xl bg-secondary text-white shadow-xl transition-all flex items-center gap-4 text-left group hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <LightbulbIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">I have an idea</h3>
                <p className="text-sm text-white/70 mt-0.5">
                  I know what I want to build
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRightIcon className="w-5 h-5 text-secondary" />
              </div>
            </motion.button>

            {/* Option 2: I want to brainstorm */}
            <motion.button
              onClick={onBrainstorm}
              className="w-full p-5 rounded-2xl bg-gradient-to-br from-[#D4A394] to-[#C4917F] text-white shadow-xl transition-all flex items-center gap-4 text-left group hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <MoonIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">I want to brainstorm</h3>
                <p className="text-sm text-white/80 mt-0.5">
                  Let Moon help me discover my path
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom illustration hint */}
      <motion.div 
        className="px-5 pb-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="8" r="1" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-xs">Both paths lead to your personalized blueprint</p>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingChoiceScreen;
