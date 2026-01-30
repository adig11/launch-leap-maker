import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
interface WelcomeScreenProps {
  onStart: () => void;
}
const WelcomeScreen = ({
  onStart
}: WelcomeScreenProps) => {
  return <div className="min-h-screen bg-[#F8F6F3] subtle-grid flex flex-col relative overflow-hidden">
      {/* Top rocket icon */}
      <motion.div className="flex justify-center pt-8" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        
      </motion.div>

      {/* Central illustration with concentric circles */}
      <motion.div className="flex-1 flex items-center justify-center px-6" initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.8,
      delay: 0.2
    }}>
        <div className="relative w-64 h-64">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-[12px] border-[#EBE6E1]" />
          {/* Middle circle */}
          <div className="absolute inset-8 rounded-full border-[10px] border-[#F0EBE6]" />
          {/* Inner circle */}
          <div className="absolute inset-16 rounded-full border-[8px] border-[#F5F0EB]" />
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div className="w-5 h-5 rounded-full bg-primary" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} />
          </div>
          
          {/* Sparkle stars */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }}>
            <svg viewBox="0 0 48 48" className="w-16 h-16 text-primary">
              {/* 4-point star */}
              <path d="M24 8L26 20L38 22L26 24L24 36L22 24L10 22L22 20L24 8Z" fill="currentColor" />
              {/* Small stars */}
              <circle cx="34" cy="12" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="38" cy="18" r="1.5" fill="currentColor" opacity="0.4" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom content */}
      <motion.div className="px-6 pb-10" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.4
    }}>
        {/* Title */}
        <div className="text-center mb-3">
          <h1 className="text-3xl font-bold text-secondary leading-tight">
            What do you want to<br />build today?
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-base mb-8">
          The India-first launchpad for the<br />next generation of visionary<br />founders.
        </p>

        {/* CTA Button */}
        <Button onClick={onStart} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-2xl shadow-md">
          Start Venture
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-2">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>

        {/* Sign in link */}
        <p className="text-center text-muted-foreground text-sm mt-5">
          Already have an account? <span className="text-secondary font-medium underline">Sign in</span>
        </p>
      </motion.div>
    </div>;
};
export default WelcomeScreen;