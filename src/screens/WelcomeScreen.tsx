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
          
          {/* Orbiting circle - Outer orbit (orange) - border 12px, radius 122px */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%', marginLeft: -6, marginTop: -6 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(122px)' }}>
              <div className="w-3 h-3 rounded-full bg-gray-800" />
            </div>
          </motion.div>
          
          {/* Orbiting circle - Middle orbit (teal) - border 10px, radius 91px */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%', marginLeft: -5, marginTop: -5 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateY(-91px)' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
            </div>
          </motion.div>
          
          {/* Orbiting circle - Inner orbit (violet) - border 8px, radius 60px */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%', marginLeft: -4, marginTop: -4 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(-60px)' }}>
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
          </motion.div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-10 h-10 rounded-full bg-gray-500" 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ duration: 2, repeat: Infinity }} 
            />
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
          <h1 className="font-bold text-secondary leading-tight text-2xl">
            What do you want to build today? <br />​
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-base mb-8">
          Stop deraming. <br />​Start building. <br />​
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