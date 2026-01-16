import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import RupeeCoinIcon from "@/components/icons/RupeeCoinIcon";
import {
  CloudKitchenIcon,
  CafeIcon,
  FoodTruckIcon,
  BakeryIcon,
  LockIcon,
  ChevronRightIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OnboardingScreenProps {
  onComplete: (userData: {
    name: string;
    businessType: string;
    cuisine: string;
    location: string;
    investment: string;
    kitchenName: string;
  }) => void;
}

// Briefcase icon for "Start a Business"
const BriefcaseIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="6" y="16" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M16 16V12C16 9.79086 17.7909 8 20 8H28C30.2091 8 32 9.79086 32 12V16" stroke="currentColor" strokeWidth="2" />
    <path d="M6 26H42" stroke="currentColor" strokeWidth="2" />
    <rect x="20" y="22" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Government building icon for "Government Grants"
const GovernmentIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M6 20L24 8L42 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="8" y="20" width="32" height="4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 24V38M20 24V38M28 24V38M36 24V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="6" y="38" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const businessOptions = [
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchen",
    description: "Delivery-only kitchen for online orders",
    icon: CloudKitchenIcon,
    available: true,
  },
  {
    id: "cafe",
    title: "Cafe",
    description: "Cozy spot for coffee and quick bites",
    icon: CafeIcon,
    available: false,
  },
  {
    id: "food-truck",
    title: "Food Truck",
    description: "Mobile kitchen on wheels",
    icon: FoodTruckIcon,
    available: false,
  },
  {
    id: "bakery",
    title: "Home Bakery",
    description: "Homemade baked goods business",
    icon: BakeryIcon,
    available: false,
  },
];

// Cuisine themes with gradients, patterns, and name templates
const cuisineThemes: Record<string, {
  gradient: string;
  pattern: string;
  nameTemplates: string[];
  emoji: string;
}> = {
  "North Indian": {
    gradient: "from-amber-600/20 via-orange-500/15 to-red-500/10",
    pattern: "radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Tandoor Tales", "{name}'s Spice Route", "{name}'s Royal Kitchen", "{name}'s Punjabi Dhaba"],
    emoji: "🍛",
  },
  "South Indian": {
    gradient: "from-green-600/20 via-emerald-500/15 to-yellow-500/10",
    pattern: "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.1) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Dosa Corner", "{name}'s Idli Express", "{name}'s Banana Leaf", "{name}'s Chettinad Kitchen"],
    emoji: "🥥",
  },
  "Chinese": {
    gradient: "from-red-600/20 via-rose-500/15 to-amber-500/10",
    pattern: "radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Shaolin Kitchen", "{name}'s Wok & Roll", "{name}'s Dragon Bowl", "{name}'s Golden Chopsticks"],
    emoji: "🥢",
  },
  "Italian": {
    gradient: "from-green-600/20 via-white/10 to-red-500/15",
    pattern: "radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.12) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Trattoria", "{name}'s Pasta Palace", "{name}'s Little Italy", "{name}'s Bella Cucina"],
    emoji: "🍝",
  },
  "Continental": {
    gradient: "from-slate-600/15 via-blue-500/10 to-indigo-500/10",
    pattern: "radial-gradient(circle at 30% 70%, rgba(100, 116, 139, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Bistro", "{name}'s Continental Kitchen", "{name}'s The Gourmet Table", "{name}'s Cafe Nouveau"],
    emoji: "🍽️",
  },
  "Mughlai": {
    gradient: "from-amber-700/20 via-yellow-600/15 to-orange-600/10",
    pattern: "radial-gradient(circle at 25% 75%, rgba(180, 83, 9, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(202, 138, 4, 0.12) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Nawabi Dastarkhwan", "{name}'s Royal Mughal", "{name}'s Biryani Palace", "{name}'s Shahi Kitchen"],
    emoji: "👑",
  },
  "Street Food": {
    gradient: "from-yellow-500/20 via-orange-500/15 to-red-400/10",
    pattern: "radial-gradient(circle at 20% 80%, rgba(234, 179, 8, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.12) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Chaat Corner", "{name}'s Street Bites", "{name}'s Galli Kitchen", "{name}'s Thela Express"],
    emoji: "🍿",
  },
  "Biryani": {
    gradient: "from-orange-600/20 via-amber-500/15 to-yellow-500/10",
    pattern: "radial-gradient(circle at 30% 70%, rgba(234, 88, 12, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Biryani House", "{name}'s Dum Pukht", "{name}'s Handi Biryani", "{name}'s Rice & Spice"],
    emoji: "🍚",
  },
  "Multi-Cuisine": {
    gradient: "from-purple-500/15 via-pink-500/10 to-blue-500/10",
    pattern: "radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)",
    nameTemplates: ["{name}'s Global Kitchen", "{name}'s Fusion Flavors", "{name}'s World Plate", "{name}'s Kitchen Canvas"],
    emoji: "🌍",
  },
};

const cuisineOptions = Object.keys(cuisineThemes);

const investmentOptions = [
  "Under ₹2 Lakhs",
  "₹2-5 Lakhs",
  "₹5-10 Lakhs",
  "₹10-20 Lakhs",
  "₹20+ Lakhs",
];

// Generate a suggested kitchen name based on cuisine and user name
const generateKitchenName = (userName: string, cuisineType: string): string => {
  const theme = cuisineThemes[cuisineType];
  if (!theme || !userName.trim()) return "";
  const firstName = userName.trim().split(" ")[0];
  const templates = theme.nameTemplates;
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  return randomTemplate.replace("{name}", firstName);
};

type OnboardingStep = "intro" | "path-selection" | "business-selection" | "customization";

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [step, setStep] = useState<OnboardingStep>("intro");
  const [rocketSettled, setRocketSettled] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("cloud-kitchen");
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [location, setLocation] = useState("");
  const [investment, setInvestment] = useState("");
  const [suggestedName, setSuggestedName] = useState("");

  const isCustomizationValid = name.trim() && cuisine && location.trim() && investment;

  // Generate suggested name when name or cuisine changes
  const handleNameChange = (newName: string) => {
    setName(newName);
    if (cuisine && newName.trim()) {
      setSuggestedName(generateKitchenName(newName, cuisine));
    }
  };

  const handleCuisineChange = (newCuisine: string) => {
    setCuisine(newCuisine);
    if (name.trim() && newCuisine) {
      setSuggestedName(generateKitchenName(name, newCuisine));
    }
  };

  const currentTheme = cuisine ? cuisineThemes[cuisine] : null;

  const handleComplete = () => {
    onComplete({
      name: name.trim(),
      businessType: selectedBusiness,
      cuisine,
      location: location.trim(),
      investment,
      kitchenName: suggestedName,
    });
  };

  return (
    <div className="min-h-screen gradient-orange-glow flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Subtle orange glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        {/* Intro Animation */}
        {step === "intro" && (
          <motion.div
            key="intro"
            className="w-full max-w-sm flex flex-col items-center justify-center min-h-[60vh]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Rocket Animation */}
            <motion.div
              className="relative"
              initial={{ y: 300, opacity: 0, scale: 0.8 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onAnimationComplete={() => {
                setRocketSettled(true);
                // Auto-transition after settle animation completes
                setTimeout(() => setStep("path-selection"), 800);
              }}
            >
              {/* Rocket Icon */}
              <motion.div
                animate={rocketSettled ? { 
                  y: [0, -8, 0],
                } : {}}
                transition={rocketSettled ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}}
              >
                <svg 
                  viewBox="0 0 120 120" 
                  className="w-32 h-32"
                  fill="none"
                >
                  {/* Rocket body */}
                  <defs>
                    <linearGradient id="rocketGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(18 88% 46%)" />
                    </linearGradient>
                    <linearGradient id="windowGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(217 100% 51%)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main body */}
                  <path 
                    d="M60 10 C60 10 85 35 85 70 C85 85 75 95 60 95 C45 95 35 85 35 70 C35 35 60 10 60 10Z" 
                    fill="url(#rocketGradient)"
                  />
                  
                  {/* Window */}
                  <circle cx="60" cy="50" r="12" fill="url(#windowGradient)" />
                  <circle cx="60" cy="50" r="8" fill="hsl(var(--background))" opacity="0.3" />
                  
                  {/* Fins */}
                  <path d="M35 70 L20 90 L35 85 Z" fill="hsl(var(--secondary))" />
                  <path d="M85 70 L100 90 L85 85 Z" fill="hsl(var(--secondary))" />
                  
                  {/* Bottom detail */}
                  <ellipse cx="60" cy="92" rx="15" ry="5" fill="hsl(var(--secondary))" />
                </svg>
              </motion.div>

              {/* Shadow that appears on settle */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-secondary/20 rounded-full blur-md"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={rocketSettled ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text content - fades in after rocket settles */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={rocketSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-2xl font-bold text-secondary mb-2">Moonshot</h1>
              <p className="text-muted-foreground">Your launchpad to success</p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="mt-8 flex gap-1"
              initial={{ opacity: 0 }}
              animate={rocketSettled ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.15 
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Step 1: Path Selection */}
        {step === "path-selection" && (
          <motion.div
            key="path-selection"
            className="w-full max-w-sm flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            {/* Rupee coin icon at top */}
            <RupeeCoinIcon size="lg" className="mb-6" />

            <h1 className="text-2xl font-bold text-secondary text-center mb-2">
              What brings you here?
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Choose your path to get started
            </p>

            {/* Path Options */}
            <div className="w-full space-y-4 mb-8">
              {/* Start a Business */}
              <motion.button
                onClick={() => setStep("business-selection")}
                className="w-full p-5 rounded-xl border-2 border-primary bg-card shadow-lg transition-all flex items-center gap-4 text-left group hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BriefcaseIcon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary text-lg">Start a business</h3>
                  <p className="text-sm text-muted-foreground">
                    Empowering entrepreneurs to build the future
                  </p>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Government Grants */}
              <motion.button
                className="w-full p-5 rounded-xl border-2 border-border bg-card/50 transition-all flex items-center gap-4 text-left relative cursor-not-allowed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                  <GovernmentIcon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-muted-foreground text-lg">Government grants</h3>
                  <p className="text-sm text-muted-foreground">
                    Your guide to funding opportunities
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  <LockIcon className="w-3 h-3" />
                  Soon
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Business Type Selection */}
        {step === "business-selection" && (
          <motion.div
            key="business-selection"
            className="w-full max-w-sm flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back button */}
            <motion.button
              onClick={() => setStep("path-selection")}
              className="absolute top-6 left-6 p-2 rounded-lg bg-card/80 border border-border text-secondary hover:bg-card transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            {/* Rupee coin icon */}
            <RupeeCoinIcon size="md" className="mb-6" />

            <h1 className="text-2xl font-bold text-secondary text-center mb-2">
              What do you want to build?
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              We'll break it down into simple, doable steps.
            </p>

            {/* Business Selector Cards */}
            <div className="w-full space-y-3 mb-8">
              {businessOptions.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedBusiness === option.id;

                return (
                  <motion.button
                    key={option.id}
                    onClick={() => option.available && setSelectedBusiness(option.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all flex items-center gap-4 text-left relative ${
                      option.available
                        ? isSelected
                          ? "border-primary bg-card shadow-lg"
                          : "border-border bg-card/50 hover:border-primary/50"
                        : "border-border bg-muted/30 cursor-not-allowed"
                    }`}
                    whileTap={option.available ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold ${
                          option.available ? "text-secondary" : "text-muted-foreground"
                        }`}
                      >
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    {!option.available && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        <LockIcon className="w-3 h-3" />
                        Soon
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setStep("customization")}
              className="w-full h-14 text-base font-semibold rounded-xl shadow-lg"
              size="lg"
            >
              Continue
              <ChevronRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>
        )}

        {/* Step 3: Customization */}
        {step === "customization" && (
          <motion.div
            key="customization"
            className="w-full max-w-sm flex flex-col items-center relative z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            {/* Themed backdrop based on cuisine */}
            <AnimatePresence mode="wait">
              {currentTheme && (
                <motion.div
                  key={cuisine}
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${currentTheme.gradient} rounded-3xl`}
                  style={{ backgroundImage: currentTheme.pattern }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>

            {/* Back button */}
            <motion.button
              onClick={() => setStep("business-selection")}
              className="absolute top-6 left-6 p-2 rounded-lg bg-card/80 border border-border text-secondary hover:bg-card transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            {/* Dynamic emoji or rupee coin based on cuisine */}
            {currentTheme ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="text-6xl mb-6 block"
              >
                {currentTheme.emoji}
              </motion.span>
            ) : (
              <RupeeCoinIcon size="md" className="mb-6" />
            )}

            <h1 className="text-2xl font-bold text-secondary text-center mb-2">
              Let's personalize your journey
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Tell us a bit about your cloud kitchen
            </p>

            {/* Form Fields */}
            <div className="w-full space-y-5 mb-8">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-secondary font-medium">
                  Your Name
                </Label>
                <Input
                  id="name"
                  placeholder="e.g., Rahul Sharma"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="h-12 bg-card border-border"
                />
              </motion.div>

              {/* Cuisine */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label className="text-secondary font-medium">
                  Cuisine Type
                </Label>
                <Select value={cuisine} onValueChange={handleCuisineChange}>
                  <SelectTrigger className="h-12 bg-card border-border">
                    <SelectValue placeholder="Select your cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    {cuisineOptions.map((c) => (
                      <SelectItem key={c} value={c}>
                        {cuisineThemes[c].emoji} {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Suggested Kitchen Name - appears when cuisine is selected */}
              <AnimatePresence>
                {suggestedName && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 rounded-xl bg-card/80 border-2 border-primary/30 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-muted-foreground">✨ Suggested kitchen name</p>
                        <motion.button
                          type="button"
                          onClick={() => setSuggestedName(generateKitchenName(name, cuisine))}
                          className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                            <path d="M4 4V9H4.582M4.582 9C5.247 6.603 7.416 4.826 10 4.826C13.038 4.826 15.5 7.288 15.5 10.326C15.5 13.364 13.038 15.826 10 15.826C8.047 15.826 6.327 14.828 5.328 13.326M4.582 9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 20V15H19.418M19.418 15C18.753 17.397 16.584 19.174 14 19.174C10.962 19.174 8.5 16.712 8.5 13.674C8.5 10.636 10.962 8.174 14 8.174C15.953 8.174 17.673 9.172 18.672 10.674M19.418 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Shuffle
                        </motion.button>
                      </div>
                      <p className="text-lg font-bold text-primary">{suggestedName}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="location" className="text-secondary font-medium">
                  Location (City)
                </Label>
                <Input
                  id="location"
                  placeholder="e.g., Bengaluru, Karnataka"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 bg-card border-border"
                />
              </motion.div>

              {/* Investment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label className="text-secondary font-medium">
                  Investment Budget
                </Label>
                <Select value={investment} onValueChange={setInvestment}>
                  <SelectTrigger className="h-12 bg-card border-border">
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {investmentOptions.map((i) => (
                      <SelectItem key={i} value={i}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleComplete}
              disabled={!isCustomizationValid}
              className="w-full h-14 text-base font-semibold rounded-xl shadow-lg disabled:opacity-50"
              size="lg"
            >
              Launch My Journey {currentTheme?.emoji || "🚀"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingScreen;
