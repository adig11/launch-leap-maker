import { motion } from "framer-motion";
import MobileLayout from "@/components/MobileLayout";
import {
  LegalIcon,
  MenuIcon,
  KitchenSetupIcon,
  OnlineOpsIcon,
  ChevronRightIcon,
  MapIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { UserData } from "@/pages/Index";

interface DashboardScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
}

// Cuisine themes with gradients, patterns (synced with OnboardingScreen)
const cuisineThemes: Record<string, {
  gradient: string;
  pattern: string;
  accentColor: string;
  emoji: string;
}> = {
  "North Indian": {
    gradient: "from-amber-600 via-orange-500 to-red-500",
    pattern: "radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.2) 0%, transparent 40%)",
    accentColor: "text-amber-600",
    emoji: "🍛",
  },
  "South Indian": {
    gradient: "from-green-600 via-emerald-500 to-yellow-500",
    pattern: "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.2) 0%, transparent 40%)",
    accentColor: "text-emerald-600",
    emoji: "🥥",
  },
  "Chinese": {
    gradient: "from-red-600 via-rose-500 to-amber-500",
    pattern: "radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 40%)",
    accentColor: "text-red-600",
    emoji: "🥢",
  },
  "Italian": {
    gradient: "from-green-600 via-white to-red-500",
    pattern: "radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.25) 0%, transparent 40%)",
    accentColor: "text-green-600",
    emoji: "🍝",
  },
  "Continental": {
    gradient: "from-slate-600 via-blue-500 to-indigo-500",
    pattern: "radial-gradient(circle at 30% 70%, rgba(100, 116, 139, 0.25) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.2) 0%, transparent 40%)",
    accentColor: "text-indigo-600",
    emoji: "🍽️",
  },
  "Mughlai": {
    gradient: "from-amber-700 via-yellow-600 to-orange-600",
    pattern: "radial-gradient(circle at 25% 75%, rgba(180, 83, 9, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(202, 138, 4, 0.25) 0%, transparent 40%)",
    accentColor: "text-amber-700",
    emoji: "👑",
  },
  "Street Food": {
    gradient: "from-yellow-500 via-orange-500 to-red-400",
    pattern: "radial-gradient(circle at 20% 80%, rgba(234, 179, 8, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.25) 0%, transparent 40%)",
    accentColor: "text-orange-600",
    emoji: "🍿",
  },
  "Biryani": {
    gradient: "from-orange-600 via-amber-500 to-yellow-500",
    pattern: "radial-gradient(circle at 30% 70%, rgba(234, 88, 12, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.25) 0%, transparent 40%)",
    accentColor: "text-orange-600",
    emoji: "🍚",
  },
  "Multi-Cuisine": {
    gradient: "from-purple-500 via-pink-500 to-blue-500",
    pattern: "radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 40%)",
    accentColor: "text-purple-600",
    emoji: "🌍",
  },
};

const learnCards = [
  { icon: LegalIcon, title: "Legal & Licenses" },
  { icon: MenuIcon, title: "Menu & Pricing" },
  { icon: KitchenSetupIcon, title: "Kitchen Setup" },
  { icon: OnlineOpsIcon, title: "Online Sales" },
];


const DashboardScreen = ({ activeTab, onTabChange, userData }: DashboardScreenProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const currentTheme = cuisineThemes[userData.cuisine];
  const kitchenName = userData.kitchenName || `${userData.name}'s Kitchen`;

  return (
    <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
      <div className="relative">
        {/* Themed Header Banner */}
        <motion.div
          className={`relative overflow-hidden px-5 pt-6 pb-8 bg-gradient-to-br ${currentTheme?.gradient || "from-primary via-primary to-accent"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-60" 
            style={{ backgroundImage: currentTheme?.pattern || "none" }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.p 
              className="text-white/80 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, {userData.name.split(" ")[0]}! 👋
            </motion.p>
            <motion.h1 
              className="text-2xl font-bold text-white mt-1 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span>{currentTheme?.emoji || "🍳"}</span>
              {kitchenName}
            </motion.h1>
            <motion.p 
              className="text-white/70 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {userData.cuisine} • {userData.location}
            </motion.p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="px-5 py-6 -mt-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Business Snapshot */}
          <motion.div
            variants={cardVariants}
            className="bg-card rounded-xl p-5 shadow-lg border border-border mb-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentTheme?.gradient || "from-primary to-accent"} flex items-center justify-center text-2xl shadow-md`}>
                  {currentTheme?.emoji || "🍳"}
                </div>
                <div>
                  <h2 className="font-semibold text-secondary">
                    {kitchenName}
                  </h2>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapIcon className="w-3 h-3" />
                    {userData.location} • {userData.investment}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-accent text-sm">
                Edit
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Journey Progress */}
          <motion.div
            variants={cardVariants}
            className="bg-card rounded-xl p-5 shadow-sm border border-border mb-4"
          >
            <div className="flex items-center gap-5">
              {/* Circular Progress Ring with themed color */}
              <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    strokeWidth="6"
                    stroke="hsl(var(--muted))"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    strokeWidth="6"
                    stroke="hsl(var(--primary))"
                    fill="none"
                    strokeDasharray={`${(0 / 10) * 213.6} 213.6`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">0/10</span>
                </div>
                {/* Dot indicator */}
                <div className="absolute top-0 right-2 w-3 h-3 bg-primary rounded-full shadow-sm" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Modules completed</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ~14 days to launch-ready
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: What You'll Learn */}
          <motion.div
            variants={cardVariants}
            className="bg-card rounded-xl p-5 shadow-sm border border-border mb-4"
          >
            <h3 className="font-semibold text-secondary mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-2 gap-3">
              {learnCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-3 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-secondary leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 4: Next Action */}
          <motion.div
            variants={cardVariants}
            className="bg-card rounded-xl p-5 shadow-sm border-2 border-accent/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
            <h3 className="font-semibold text-secondary mb-1">
              Start with Regulations & Legal
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Remove paperwork paralysis in one sitting.
            </p>
            <Button
              className="w-full"
              onClick={() => onTabChange("journey")}
            >
              Continue
              <ChevronRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default DashboardScreen;
