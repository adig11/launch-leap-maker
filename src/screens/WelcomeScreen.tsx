import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import crystalPrism from "@/assets/crystal-prism-transparent.png";
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
      <motion.div 
        className="flex-1 flex items-center justify-center px-6" 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Crystal prism image - rays are part of the image */}
        <img 
          src={crystalPrism} 
          alt="Crystal prism with rays" 
          className="w-full max-w-md h-auto"
        />
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