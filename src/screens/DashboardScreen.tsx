import { motion } from "framer-motion";
import MobileLayout from "@/components/MobileLayout";
import { ChevronRightIcon } from "@/components/icons";
import { UserData } from "@/pages/Index";

interface DashboardScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
}

// Business type themes - using solid warm colors that match the page
const businessThemes: Record<string, {
  bgColor: string;
  emoji: string;
  textColor: string;
}> = {
  "creator": {
    bgColor: "bg-[#E8E4E0]",
    emoji: "🎬",
    textColor: "text-secondary",
  },
  "cloud-kitchen": {
    bgColor: "bg-[#E8E4E0]",
    emoji: "🍳",
    textColor: "text-secondary",
  },
  "ecommerce": {
    bgColor: "bg-[#E8E4E0]",
    emoji: "📦",
    textColor: "text-secondary",
  },
  "stock-trader": {
    bgColor: "bg-[#E8E4E0]",
    emoji: "📈",
    textColor: "text-secondary",
  },
};

const DashboardScreen = ({ activeTab, onTabChange, userData }: DashboardScreenProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const currentTheme = businessThemes[userData.businessType] || businessThemes["cloud-kitchen"];
  const businessName = userData.kitchenName || "Your Business";
  const firstName = userData.name?.split(" ")[0] || "Founder";

  return (
    <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
      <div className="min-h-screen bg-[#F8F6F3]">
        {/* Header */}
        <motion.div 
          className="px-5 pt-6 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E8B4A6] to-[#D4A394] flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-secondary">Moonshot</span>
            </div>
            
            {/* Profile avatar */}
            <div className="w-10 h-10 rounded-full bg-muted border-2 border-border flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-muted-foreground">
                <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          className="px-5 pb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Card */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-3xl bg-[#F5EDE8] p-6 mb-4"
          >
            {/* Rocket illustration in background */}
            <div className="absolute right-0 top-0 bottom-0 w-32 opacity-30">
              <svg viewBox="0 0 100 150" className="w-full h-full" fill="none">
                <path d="M50 10C50 10 75 35 75 70C75 85 65 95 50 95C35 95 25 85 25 70C25 35 50 10 50 10Z" fill="#D4A394"/>
                <path d="M25 70L10 90L25 85Z" fill="#C4917F"/>
                <path d="M75 70L90 90L75 85Z" fill="#C4917F"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <p className="text-xs font-medium text-primary tracking-wide uppercase mb-2">PRE-FOUNDER STAGE</p>
              <h1 className="text-2xl font-bold text-secondary leading-tight mb-4">
                Ready to launch,<br/>{firstName}?
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8DDD6]">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Live Mentoring</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Meet Moon Card */}
            <motion.div
              variants={cardVariants}
              className="rounded-2xl bg-gradient-to-br from-[#D4A394] to-[#C4917F] p-5 aspect-square flex flex-col justify-end"
            >
              <div className="mb-auto">
                <svg viewBox="0 0 48 48" className="w-12 h-12 text-white/80">
                  <path d="M36 28C36 36.284 29.284 43 21 43C12.716 43 6 36.284 6 28C6 19.716 12.716 13 21 13C21.338 13 21.674 13.01 22.008 13.029C19.548 15.892 18 19.588 18 23.5C18 31.232 24.268 37.5 32 37.5C33.942 37.5 35.796 37.114 37.492 36.416C36.514 33.708 36 30.812 36 28Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="font-semibold text-white text-base">Meet Moon</h3>
              <p className="text-xs text-white/80 mt-0.5">Your AI Strategy Partner</p>
            </motion.div>

            {/* Clarity Score Card */}
            <motion.div
              variants={cardVariants}
              className="rounded-2xl bg-white border border-border p-4 flex flex-col"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium text-secondary">Clarity Score</span>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      strokeWidth="5"
                      stroke="#E8E8E0"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      strokeWidth="5"
                      stroke="#D4A394"
                      fill="none"
                      strokeDasharray={`${(12 / 100) * 213.6} 213.6`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">12%</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">3 milestones to next level</p>
            </motion.div>
          </div>

          {/* Begin Journey Card + Founders count */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {/* Begin Journey - takes 3 columns */}
            <motion.button
              variants={cardVariants}
              onClick={() => onTabChange("journey")}
              className="col-span-3 rounded-2xl bg-secondary p-5 flex items-center justify-between text-left group hover:bg-secondary/90 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-white text-lg">Begin Journey</h3>
                <p className="text-sm text-white/70 mt-0.5">Define your first thesis</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChevronRightIcon className="w-6 h-6 text-secondary" />
              </div>
            </motion.button>

            {/* Founders count - takes 1 column */}
            <motion.div
              variants={cardVariants}
              className="rounded-2xl bg-[#E8F0EE] p-3 flex flex-col items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#6B9B8E] mb-1">
                <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21V19C23 17.1362 21.7252 15.5701 20 15.126" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 3.12598C17.7252 3.56984 19 5.13618 19 7C19 8.86382 17.7252 10.4302 16 10.874" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-lg font-bold text-secondary">1.2k</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Founders</span>
            </motion.div>
          </div>

          {/* Current Business Path Card */}
          <motion.div
            variants={cardVariants}
            className={`rounded-2xl ${currentTheme.bgColor} p-5 ${currentTheme.textColor}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{currentTheme.emoji}</span>
              <div>
                <h3 className="font-semibold text-lg">{businessName}</h3>
                <p className="text-sm text-white/80">Your personalized path</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>{userData.location}</span>
              <span>•</span>
              <span>{userData.investment}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default DashboardScreen;
