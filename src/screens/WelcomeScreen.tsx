import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import crystalPrism from "@/assets/crystal-prism.png";
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

      {/* Central illustration with crystal prism */}
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
        <div className="relative">
          {/* Crystal prism image */}
          <img 
            src={crystalPrism} 
            alt="Crystal prism with rays" 
            className="w-72 h-auto"
          />
          
          {/* Animated rays overlay on the right */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Ray 1 */}
            <motion.div 
              className="absolute right-0 top-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4C9B8]/60 to-transparent origin-left"
              style={{ transform: 'translateY(-12px) rotate(-8deg)', right: '5%' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Ray 2 */}
            <motion.div 
              className="absolute right-0 top-1/2 w-36 h-[3px] bg-gradient-to-r from-transparent via-[#C9BDA8]/50 to-transparent origin-left"
              style={{ transform: 'translateY(-4px) rotate(-3deg)', right: '3%' }}
              animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.95, 1.15, 0.95] }}
              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            {/* Ray 3 */}
            <motion.div 
              className="absolute right-0 top-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#E0D5C4]/70 to-transparent origin-left"
              style={{ transform: 'translateY(4px) rotate(2deg)', right: '2%' }}
              animate={{ opacity: [0.5, 1, 0.5], scaleX: [1, 1.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
            {/* Ray 4 */}
            <motion.div 
              className="absolute right-0 top-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D9CDBB]/55 to-transparent origin-left"
              style={{ transform: 'translateY(12px) rotate(7deg)', right: '4%' }}
              animate={{ opacity: [0.35, 0.85, 0.35], scaleX: [0.92, 1.12, 0.92] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            />
          </div>
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