import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-[#F8F6F3] flex flex-col relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Top bar */}
      <motion.div 
        className="flex items-center justify-between px-5 py-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono text-muted-foreground tracking-wider">VER. 1.0.0</span>
        <span className="text-xs font-mono text-primary font-medium tracking-wider">LIVE CANVAS</span>
      </motion.div>

      {/* Main rocket visual */}
      <motion.div 
        className="flex-1 flex items-center justify-center px-6 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full max-w-sm aspect-square">
          {/* Card frame with rounded corners */}
          <div className="absolute inset-0 rounded-3xl border-2 border-border/50 bg-gradient-to-b from-[#1A3A3A] to-[#0F2828] overflow-hidden shadow-2xl">
            {/* System info overlay */}
            <div className="absolute top-4 right-4 text-right">
              <p className="text-xs font-mono text-white/40">SYS: AI_CORE_B</p>
              <p className="text-xs font-mono text-white/40">V: 1.1.0</p>
            </div>
            
            {/* Landscape silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-20">
              <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0 80 L0 40 Q50 30 100 45 T200 35 T300 50 T400 40 L400 80 Z" 
                  fill="#0A1F1F"
                />
                <path 
                  d="M0 80 L0 50 Q60 40 120 55 T240 45 T360 60 L400 55 L400 80 Z" 
                  fill="#0D2525"
                  opacity="0.7"
                />
              </svg>
            </div>
            
            {/* Rocket capsule */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <svg viewBox="0 0 120 180" className="w-32 h-48" fill="none">
                  {/* Rocket body */}
                  <defs>
                    <linearGradient id="capsuleGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#F5F5F0" />
                      <stop offset="100%" stopColor="#E8E8E0" />
                    </linearGradient>
                    <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="50%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#9A3412" opacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Left wing */}
                  <path d="M25 70 L10 100 L25 95 Z" fill="#F5F5F0" />
                  {/* Right wing */}
                  <path d="M95 70 L110 100 L95 95 Z" fill="#F5F5F0" />
                  
                  {/* Main capsule body */}
                  <path 
                    d="M60 10 C60 10 95 40 95 80 L95 110 C95 120 85 125 60 125 C35 125 25 120 25 110 L25 80 C25 40 60 10 60 10Z" 
                    fill="url(#capsuleGradient)"
                  />
                  
                  {/* Window */}
                  <ellipse cx="60" cy="55" rx="20" ry="25" fill="#1A3A3A" />
                  <ellipse cx="60" cy="55" rx="15" ry="20" fill="#0F2828" />
                  
                  {/* Flame effect */}
                  <motion.ellipse
                    cx="60"
                    cy="145"
                    rx="20"
                    ry="35"
                    fill="url(#flameGradient)"
                    animate={{ 
                      ry: [35, 40, 35],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 0.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </motion.div>
            </div>
            
            {/* Coordinate display */}
            <div className="absolute bottom-6 left-4 text-left">
              <p className="text-xs font-mono text-white/40">X: 124.092</p>
              <p className="text-xs font-mono text-white/40">Y: 88.001</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom content */}
      <motion.div 
        className="px-6 pb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Project badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 rounded-full border-2 border-primary/30 bg-primary/5">
            <span className="text-xs font-mono text-primary tracking-wider font-medium">
              PROJECT: MOONSHOT | EST. 2024
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-secondary tracking-tight">INITIATE</h1>
          <h2 className="text-4xl font-bold text-primary tracking-tight italic">BLUEPRINT</h2>
        </div>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-sm mb-8 max-w-xs mx-auto">
          An India-first, AI-guided framework for the next generation of founders.
        </p>

        {/* CTA Button */}
        <Button 
          onClick={onStart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold tracking-wide rounded-xl shadow-lg shadow-primary/25"
        >
          START VENTURE
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-2">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>

        {/* Footer text */}
        <div className="flex items-center justify-center mt-6 gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ARCHITECTURAL ALPHA</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
