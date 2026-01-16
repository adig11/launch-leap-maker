import { motion } from "framer-motion";
import MobileLayout from "@/components/MobileLayout";
import { LightningIcon, CheckIcon, LockIcon, ChevronRightIcon, MapIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { UserData } from "@/pages/Index";
import { useProgress } from "@/hooks/useProgress";

interface ProfileScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
  onResetOnboarding: () => void;
}

const cuisineThemes: Record<string, {
  gradient: string;
  pattern: string;
  accentColor: string;
  emoji: string;
}> = {
  "North Indian": { gradient: "from-amber-600 via-orange-500 to-red-500", pattern: "radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)", accentColor: "text-amber-600", emoji: "🍛" },
  "South Indian": { gradient: "from-green-600 via-emerald-500 to-yellow-500", pattern: "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)", accentColor: "text-emerald-600", emoji: "🥥" },
  "Chinese": { gradient: "from-red-600 via-rose-500 to-amber-500", pattern: "radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)", accentColor: "text-red-600", emoji: "🥢" },
  "Italian": { gradient: "from-green-600 via-white to-red-500", pattern: "radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.25) 0%, transparent 50%)", accentColor: "text-green-600", emoji: "🍝" },
  "Continental": { gradient: "from-slate-600 via-blue-500 to-indigo-500", pattern: "radial-gradient(circle at 30% 70%, rgba(100, 116, 139, 0.25) 0%, transparent 50%)", accentColor: "text-indigo-600", emoji: "🍽️" },
  "Mughlai": { gradient: "from-amber-700 via-yellow-600 to-orange-600", pattern: "radial-gradient(circle at 25% 75%, rgba(180, 83, 9, 0.3) 0%, transparent 50%)", accentColor: "text-amber-700", emoji: "👑" },
  "Street Food": { gradient: "from-yellow-500 via-orange-500 to-red-400", pattern: "radial-gradient(circle at 20% 80%, rgba(234, 179, 8, 0.3) 0%, transparent 50%)", accentColor: "text-orange-600", emoji: "🍿" },
  "Biryani": { gradient: "from-orange-600 via-amber-500 to-yellow-500", pattern: "radial-gradient(circle at 30% 70%, rgba(234, 88, 12, 0.3) 0%, transparent 50%)", accentColor: "text-orange-600", emoji: "🍚" },
  "Multi-Cuisine": { gradient: "from-purple-500 via-pink-500 to-blue-500", pattern: "radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.25) 0%, transparent 50%)", accentColor: "text-purple-600", emoji: "🌍" },
};

const businessTypeLabels: Record<string, string> = {
  "cloud-kitchen": "Cloud Kitchen", "cafe": "Cafe", "food-truck": "Food Truck", "bakery": "Home Bakery",
};

const ProfileScreen = ({ activeTab, onTabChange, userData, onResetOnboarding }: ProfileScreenProps) => {
  const { progress } = useProgress();
  
  const completedLessons = progress.completedLessons.length;
  const totalLessons = 24; // Total lessons across all modules
  const launchReadiness = Math.round((completedLessons / totalLessons) * 100);
  const completedModules = Math.floor(completedLessons / 3); // Approximate

  const badges = [
    { id: 1, title: "First Module", unlocked: completedModules >= 1, icon: "🚀" },
    { id: 2, title: "Legal Ready", unlocked: completedModules >= 2, icon: "⚖️" },
    { id: 3, title: "Menu Finalized", unlocked: completedModules >= 4, icon: "📋" },
    { id: 4, title: "Launch Ready", unlocked: completedModules >= 10, icon: "🎯" },
  ];

  const businessLabel = businessTypeLabels[userData.businessType] || "Cloud Kitchen";
  const currentTheme = cuisineThemes[userData.cuisine];
  const kitchenName = userData.kitchenName || `${userData.name}'s Kitchen`;

  return (
    <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
      <div className="relative">
        <motion.div className={`relative overflow-hidden px-5 pt-6 pb-8 bg-gradient-to-br ${currentTheme?.gradient || "from-primary to-accent"}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: currentTheme?.pattern || "none" }} />
          <div className="relative z-10">
            <p className="text-white/80 text-sm font-medium">Hi, {userData.name.split(" ")[0]}! 👋</p>
            <h1 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
              <span>{currentTheme?.emoji || "🍳"}</span>{kitchenName}
            </h1>
            <p className="text-white/70 text-sm mt-2">{userData.cuisine} • {userData.location}</p>
          </div>
        </motion.div>

        <motion.div className="px-5 py-6 -mt-4 relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-card rounded-xl p-5 shadow-lg border border-border mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentTheme?.gradient} flex items-center justify-center text-2xl shadow-md`}>{currentTheme?.emoji}</div>
              <div>
                <h2 className="font-semibold text-secondary">{businessLabel}</h2>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><MapIcon className="w-3 h-3" />{userData.location} • {userData.investment}</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border mb-4">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentTheme?.gradient} flex items-center justify-center`}>
                <LightningIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary">{progress.currentStreak || 0}</p>
                <p className="text-muted-foreground text-sm">day streak</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-5 shadow-sm border border-border mb-4">
            <h3 className="font-semibold text-secondary mb-4">Badges</h3>
            <div className="grid grid-cols-4 gap-3">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${badge.unlocked ? `bg-gradient-to-br ${currentTheme?.gradient} shadow-lg` : "bg-muted/30"}`} style={{ filter: badge.unlocked ? "none" : "blur(2px) grayscale(1)" }}>
                    {badge.unlocked ? <span className="text-2xl">{badge.icon}</span> : <LockIcon className="w-5 h-5 text-muted-foreground/50" />}
                  </div>
                  <span className={`text-xs text-center font-medium ${badge.unlocked ? "text-secondary" : "text-muted-foreground/60"}`}>{badge.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-5 shadow-sm border border-border mb-6">
            <h3 className="font-semibold text-secondary mb-4">Your Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lessons completed</span>
                <span className={`font-bold ${currentTheme?.accentColor}`}>{completedLessons} / {totalLessons}</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Time invested</span>
                <span className={`font-bold ${currentTheme?.accentColor}`}>{(progress.totalTimeMinutes / 60).toFixed(1)} hrs</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Launch readiness</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div className={`h-full bg-gradient-to-r ${currentTheme?.gradient}`} initial={{ width: 0 }} animate={{ width: `${launchReadiness}%` }} transition={{ duration: 1 }} />
                  </div>
                  <span className={`font-bold ${currentTheme?.accentColor}`}>{launchReadiness}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button className={`w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r ${currentTheme?.gradient} hover:opacity-90`} onClick={() => onTabChange("journey")}>
              Continue Journey<ChevronRightIcon className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="ghost" className="w-full text-muted-foreground" onClick={onResetOnboarding}>Start Over (Reset Onboarding)</Button>
          </div>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default ProfileScreen;
