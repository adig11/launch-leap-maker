import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { ChevronRightIcon } from "@/components/icons";
import { UserData } from "@/pages/Index";
import { useProgress } from "@/hooks/useProgress";
import { getLessonsForModule, LessonData, getModuleInfo } from "@/data/lessonData";
import LessonScreen from "@/screens/LessonScreen";
import LessonCompleteScreen from "@/screens/LessonCompleteScreen";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ChevronLeft, Lock, CheckCircle2 } from "lucide-react";

interface JourneyScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
}

// Journey phases configuration per business type
const journeyPhasesConfig: Record<string, { phases: typeof defaultPhases; activeStep: string; nextMilestone: string }> = {
  "creator": {
    phases: [
      { id: 1, title: "Niche & Positioning", status: "completed", completedDate: "Completed on Oct 12" },
      { id: 2, title: "Content Strategy", status: "completed", completedDate: "Completed on Oct 28" },
      { id: 3, title: "Platform Setup", status: "current", completedDate: "Current Phase • 2/5 Tasks" },
      { id: 4, title: "Monetization", status: "locked", completedDate: "Upcoming Step" },
      { id: 5, title: "Scale & Grow", status: "locked", completedDate: "Final Milestone" },
    ],
    activeStep: "Platform Setup & Branding",
    nextMilestone: "Monetization",
  },
  "cloud-kitchen": {
    phases: [
      { id: 1, title: "Concept & Research", status: "completed", completedDate: "Completed on Oct 12" },
      { id: 2, title: "Legal & Licensing", status: "completed", completedDate: "Completed on Oct 28" },
      { id: 3, title: "Kitchen Setup", status: "current", completedDate: "Current Phase • 2/5 Tasks" },
      { id: 4, title: "Menu Validation", status: "locked", completedDate: "Upcoming Step" },
      { id: 5, title: "Go-to-Market", status: "locked", completedDate: "Final Milestone" },
    ],
    activeStep: "Kitchen Setup & Branding",
    nextMilestone: "Menu Validation",
  },
  "ecommerce": {
    phases: [
      { id: 1, title: "Product Research", status: "completed", completedDate: "Completed on Oct 12" },
      { id: 2, title: "Supplier & Inventory", status: "completed", completedDate: "Completed on Oct 28" },
      { id: 3, title: "Store Setup", status: "current", completedDate: "Current Phase • 2/5 Tasks" },
      { id: 4, title: "Marketing Launch", status: "locked", completedDate: "Upcoming Step" },
      { id: 5, title: "Scale Operations", status: "locked", completedDate: "Final Milestone" },
    ],
    activeStep: "Store Setup & Branding",
    nextMilestone: "Marketing Launch",
  },
  "stock-trader": {
    phases: [
      { id: 1, title: "Market Fundamentals", status: "completed", completedDate: "Completed on Oct 12" },
      { id: 2, title: "Strategy Development", status: "completed", completedDate: "Completed on Oct 28" },
      { id: 3, title: "Portfolio Setup", status: "current", completedDate: "Current Phase • 2/5 Tasks" },
      { id: 4, title: "Risk Management", status: "locked", completedDate: "Upcoming Step" },
      { id: 5, title: "Advanced Trading", status: "locked", completedDate: "Final Milestone" },
    ],
    activeStep: "Portfolio Setup & Analysis",
    nextMilestone: "Risk Management",
  },
};

const defaultPhases = [
  { id: 1, title: "Concept & Research", status: "completed", completedDate: "Completed on Oct 12" },
  { id: 2, title: "Legal & Licensing", status: "completed", completedDate: "Completed on Oct 28" },
  { id: 3, title: "Setup & Branding", status: "current", completedDate: "Current Phase • 2/5 Tasks" },
  { id: 4, title: "Validation", status: "locked", completedDate: "Upcoming Step" },
  { id: 5, title: "Go-to-Market", status: "locked", completedDate: "Final Milestone" },
];

const businessLabels: Record<string, string> = {
  "creator": "Content Creator",
  "cloud-kitchen": "Cloud Kitchen",
  "ecommerce": "Ecommerce",
  "stock-trader": "Stock Trader",
};

const JourneyScreen = ({ activeTab, onTabChange, userData }: JourneyScreenProps) => {
  const [activeLesson, setActiveLesson] = useState<LessonData | null>(null);
  const [showComplete, setShowComplete] = useState(false);
  const [lessonScore, setLessonScore] = useState({ correct: 0, total: 0 });

  const { progress, completeLesson, isLessonCompleted, getModuleCompletedCount } = useProgress();

  const businessLabel = businessLabels[userData.businessType] || "Cloud Kitchen";
  const kitchenName = userData.kitchenName || businessLabel;
  
  // Get journey config based on business type
  const journeyConfig = journeyPhasesConfig[userData.businessType] || {
    phases: defaultPhases,
    activeStep: "Setup & Branding",
    nextMilestone: "Validation",
  };
  const journeyPhases = journeyConfig.phases;

  // Mock data for journey
  const mockData = {
    totalLessons: 24,
    completedLessons: 8,
    progressPercent: 34,
    currentPhase: 3,
    tasksRemaining: 3,
  };

  const handleLessonClick = (lesson: LessonData) => {
    setActiveLesson(lesson);
  };

  const handleLessonComplete = () => {
    if (activeLesson) {
      const durationMinutes = parseInt(activeLesson.duration) || 5;
      completeLesson(activeLesson.id, activeLesson.moduleId, activeLesson.lessonIndex, durationMinutes);
      setLessonScore({ correct: activeLesson.questions.length, total: activeLesson.questions.length });
      setShowComplete(true);
    }
  };

  const handleLessonClose = () => {
    setActiveLesson(null);
  };

  const handleCompleteClose = () => {
    setShowComplete(false);
    setActiveLesson(null);
  };

  return (
    <>
      <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
        {/* Header */}
        <motion.div 
          className="px-5 pt-6 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => onTabChange("home")}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-secondary" />
            </button>
            <div className="text-center">
              <h1 className="font-bold text-secondary">{businessLabel}</h1>
              <p className="text-xs text-primary font-medium tracking-wide uppercase">Adi's Journey</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
              <MoreHorizontal className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </motion.div>

        {/* Overall Progress Card */}
        <motion.div 
          className="mx-5 mb-4 rounded-2xl bg-white border border-border p-5 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Overall Progress</p>
            <span className="px-2 py-1 rounded-full bg-[#FDF0E8] text-xs font-medium text-primary">
              Phase {mockData.currentPhase}/5
            </span>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-3xl font-bold text-secondary">{mockData.progressPercent}%</span>
            <span className="text-muted-foreground text-sm">to Launch</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-[#E8956D] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${mockData.progressPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Active Step Card */}
        <motion.div 
          className="mx-5 mb-6 rounded-2xl bg-[#FDF0E8] p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs font-medium text-primary tracking-wide uppercase mb-2">Active Step</p>
          <h2 className="text-xl font-bold text-secondary mb-2">{journeyConfig.activeStep}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Complete {mockData.tasksRemaining} more tasks to unlock {journeyConfig.nextMilestone}.
          </p>
          <Button 
            className="w-full py-5 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Continue Roadmap
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </Button>
        </motion.div>

        {/* Journey Timeline */}
        <div className="px-5 pb-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-muted" />

            {journeyPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="relative flex items-start gap-4 pb-6 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
              >
                {/* Status indicator */}
                <div className="relative z-10">
                  {phase.status === "completed" ? (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  ) : phase.status === "current" ? (
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Phase content */}
                <div className="flex-1 pt-1">
                  <h3 className={`font-semibold ${
                    phase.status === "locked" ? "text-muted-foreground" : 
                    phase.status === "current" ? "text-primary" : "text-secondary"
                  }`}>
                    {phase.title}
                  </h3>
                  <p className={`text-sm ${
                    phase.status === "locked" ? "text-muted-foreground/60" : "text-muted-foreground"
                  }`}>
                    {phase.completedDate}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MobileLayout>

      {/* Lesson Screen */}
      <AnimatePresence>
        {activeLesson && !showComplete && (
          <LessonScreen
            lesson={activeLesson}
            onComplete={handleLessonComplete}
            onClose={handleLessonClose}
          />
        )}
      </AnimatePresence>

      {/* Lesson Complete Screen */}
      <AnimatePresence>
        {showComplete && activeLesson && (
          <LessonCompleteScreen
            lessonTitle={activeLesson.title}
            correctAnswers={lessonScore.correct}
            totalQuestions={lessonScore.total}
            currentStreak={progress.currentStreak}
            xpEarned={lessonScore.correct * 10}
            onContinue={handleCompleteClose}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default JourneyScreen;
