import { motion } from "framer-motion";
import MobileLayout from "@/components/MobileLayout";
import { UserData } from "@/pages/Index";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui/button";
import { ChevronRight, Settings, LogOut, Award, Clock, Target, Zap } from "lucide-react";

interface ProfileScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
  onResetOnboarding: () => void;
}

const businessLabels: Record<string, string> = {
  "creator": "Content Creator",
  "cloud-kitchen": "Cloud Kitchen",
  "ecommerce": "Ecommerce Store",
  "stock-trader": "Stock Trading",
};

const ProfileScreen = ({ activeTab, onTabChange, userData, onResetOnboarding }: ProfileScreenProps) => {
  const { progress } = useProgress();
  
  const completedLessons = progress.completedLessons.length;
  const totalLessons = 24;
  const launchReadiness = Math.round((completedLessons / totalLessons) * 100);
  const businessLabel = businessLabels[userData.businessType] || "Cloud Kitchen";
  const firstName = userData.name?.split(" ")[0] || "Founder";

  const stats = [
    { icon: Target, label: "Lessons Done", value: `${completedLessons}/${totalLessons}` },
    { icon: Clock, label: "Time Invested", value: `${(progress.totalTimeMinutes / 60).toFixed(1)} hrs` },
    { icon: Zap, label: "Day Streak", value: progress.currentStreak || 0 },
  ];

  const badges = [
    { id: 1, title: "First Step", unlocked: completedLessons >= 1, icon: "🚀" },
    { id: 2, title: "Quick Learner", unlocked: completedLessons >= 5, icon: "⚡" },
    { id: 3, title: "Consistent", unlocked: progress.currentStreak >= 3, icon: "🔥" },
    { id: 4, title: "Launch Ready", unlocked: launchReadiness >= 80, icon: "🎯" },
  ];

  return (
    <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
      <div className="min-h-screen pb-4">
        {/* Header */}
        <motion.div 
          className="px-5 pt-6 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-secondary">Profile</h1>
            <button className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
              <Settings className="w-5 h-5 text-secondary" />
            </button>
          </div>

          {/* Profile Card */}
          <motion.div 
            className="rounded-2xl bg-white border border-border p-5 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#E8956D] flex items-center justify-center text-2xl font-bold text-white">
                {firstName.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-secondary">{userData.name || "Founder"}</h2>
                <p className="text-sm text-muted-foreground">{businessLabel}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{userData.location}</p>
              </div>
            </div>

            {/* Launch Progress */}
            <div className="bg-[#F8F6F3] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-secondary">Launch Readiness</span>
                <span className="text-sm font-bold text-primary">{launchReadiness}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-[#E8956D] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${launchReadiness}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="px-5 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-2xl bg-white border border-border p-4 text-center shadow-sm">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-secondary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Badges Section */}
        <motion.div 
          className="px-5 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="rounded-2xl bg-white border border-border p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-secondary">Achievements</h3>
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center gap-2">
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      badge.unlocked 
                        ? "bg-gradient-to-br from-primary to-[#E8956D] shadow-md" 
                        : "bg-muted"
                    }`}
                  >
                    <span className={`text-xl ${!badge.unlocked && "grayscale opacity-40"}`}>
                      {badge.icon}
                    </span>
                  </div>
                  <span className={`text-xs text-center font-medium ${
                    badge.unlocked ? "text-secondary" : "text-muted-foreground"
                  }`}>
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div 
          className="px-5 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            onClick={() => onTabChange("journey")}
            className="w-full py-5 text-base font-semibold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Continue Your Path
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>

          <button 
            onClick={onResetOnboarding}
            className="w-full py-4 rounded-2xl bg-white border border-border text-muted-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Start Over
          </button>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default ProfileScreen;
