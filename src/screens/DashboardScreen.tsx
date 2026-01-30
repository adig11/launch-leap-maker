import { motion } from "framer-motion";
import MobileLayout from "@/components/MobileLayout";
import { ChevronRightIcon } from "@/components/icons";
import { UserData } from "@/pages/Index";
import { useProgress } from "@/hooks/useProgress";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
interface DashboardScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
}
const DashboardScreen = ({
  activeTab,
  onTabChange,
  userData
}: DashboardScreenProps) => {
  const {
    progress
  } = useProgress();
  const firstName = userData.name?.split(" ")[0] || "Founder";
  const completedLessons = progress.completedLessons.length;
  const totalLessons = 24;
  const launchProgress = Math.round(completedLessons / totalLessons * 100);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "GOOD MORNING";
    if (hour < 17) return "GOOD AFTERNOON";
    return "GOOD EVENING";
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
      <div className="min-h-screen">
        {/* Header */}
        <motion.div className="px-5 pt-6 pb-4" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <div className="flex items-center justify-between">
            {/* Left side - Logo and greeting */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-[#E8956D] flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path d="M12 2C12 2 19 7 19 14C19 17.5 16.5 20 12 20C7.5 20 5 17.5 5 14C5 7 12 2 12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground tracking-wide">{getGreeting()}</p>
                <h1 className="text-lg font-bold text-secondary">{firstName}</h1>
              </div>
            </div>
            
            {/* Notification bell */}
            <button className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
              <Bell className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div className="px-5 pb-6" variants={containerVariants} initial="hidden" animate="visible">
          {/* Launch Progress Card */}
          <motion.div variants={cardVariants} className="rounded-2xl bg-white border border-border p-5 mb-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-secondary">Launch Progress</h2>
              <span className="text-lg font-bold text-primary">{launchProgress}%</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden mb-3">
              <motion.div className="h-full bg-gradient-to-r from-primary to-[#E8956D] rounded-full" initial={{
              width: 0
            }} animate={{
              width: `${launchProgress}%`
            }} transition={{
              duration: 0.8,
              ease: "easeOut"
            }} />
            </div>
            <p className="text-sm text-muted-foreground">
              Next: Register your entity in GIFT City
            </p>
          </motion.div>

          {/* Two Column Cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Banking & Finance Card */}
            <motion.div variants={cardVariants} className="rounded-2xl bg-white border border-border p-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FDF0E8] flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary">
                  <path d="M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary mb-1">Banking &<br />Finance</h3>
              <p className="text-xs text-muted-foreground">3 tasks pending</p>
            </motion.div>

            {/* Legal Setup Card */}
            <motion.div variants={cardVariants} className="rounded-2xl bg-white border border-border p-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#F0E8FD] flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#8B5CF6]">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18V12M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary mb-1">Legal Setup</h3>
              <p className="text-xs text-muted-foreground">Step 2 of 5</p>
            </motion.div>
          </div>

          {/* Founder's Network Card */}
          <motion.div variants={cardVariants} className="rounded-2xl bg-[hsl(25,30%,88%)] p-5 mb-4">
            <h3 className="font-semibold text-secondary text-lg mb-2">Community Access </h3>
            <p className="text-sm text-secondary/70 mb-4">Connect with 500+ entrepreneurs who've
scaled in your category<br />scaled to Series A.
            </p>
            <button className="px-4 py-2 rounded-lg bg-secondary text-white text-sm font-medium">
              Explore Community
            </button>
          </motion.div>

          {/* Start Daily Action Button */}
          <motion.div variants={cardVariants}>
            <Button onClick={() => onTabChange("journey")} className="w-full py-6 text-base font-semibold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              Start Daily Action
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-2">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </MobileLayout>;
};
export default DashboardScreen;