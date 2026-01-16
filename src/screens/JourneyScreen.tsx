import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { CheckIcon } from "@/components/icons";
import { ChevronRight, ChevronDown, Play, Clock, CheckCircle2, Hourglass } from "lucide-react";
import { UserData } from "@/pages/Index";
import { useProgress } from "@/hooks/useProgress";
import { getLessonsForModule, LessonData, getModuleInfo } from "@/data/lessonData";
import LessonScreen from "@/screens/LessonScreen";
import LessonCompleteScreen from "@/screens/LessonCompleteScreen";

interface JourneyScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
}

// Cuisine themes
const cuisineThemes: Record<string, {
  gradient: string;
  emoji: string;
}> = {
  "North Indian": { gradient: "from-amber-600 via-orange-500 to-red-500", emoji: "🍛" },
  "South Indian": { gradient: "from-green-600 via-emerald-500 to-yellow-500", emoji: "🥥" },
  "Chinese": { gradient: "from-red-600 via-rose-500 to-amber-500", emoji: "🥢" },
  "Italian": { gradient: "from-green-600 via-white to-red-500", emoji: "🍝" },
  "Continental": { gradient: "from-slate-600 via-blue-500 to-indigo-500", emoji: "🍽️" },
  "Mughlai": { gradient: "from-amber-700 via-yellow-600 to-orange-600", emoji: "👑" },
  "Street Food": { gradient: "from-yellow-500 via-orange-500 to-red-400", emoji: "🍿" },
  "Biryani": { gradient: "from-orange-600 via-amber-500 to-yellow-500", emoji: "🍚" },
  "Multi-Cuisine": { gradient: "from-purple-500 via-pink-500 to-blue-500", emoji: "🌍" },
};

// Module data with titles
const moduleData = [
  { id: 1, title: "Regulations & Licenses" },
  { id: 2, title: "Business Structure & Costs" },
  { id: 3, title: "Kitchen Setup & Equipment" },
  { id: 4, title: "Menu Design & Pricing" },
  { id: 5, title: "Supplier Sourcing" },
  { id: 6, title: "Packaging & Branding" },
  { id: 7, title: "Online Platforms" },
  { id: 8, title: "Daily Operations SOPs" },
  { id: 9, title: "Unit Economics" },
  { id: 10, title: "Go-Live Checklist" },
];

type LessonStatus = "pending" | "in_progress" | "completed";

const JourneyScreen = ({ activeTab, onTabChange, userData }: JourneyScreenProps) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [activeLesson, setActiveLesson] = useState<LessonData | null>(null);
  const [showComplete, setShowComplete] = useState(false);
  const [lessonScore, setLessonScore] = useState({ correct: 0, total: 0 });

  const { progress, completeLesson, isLessonCompleted, getModuleCompletedCount } = useProgress();

  const currentTheme = cuisineThemes[userData.cuisine];
  const kitchenName = userData.kitchenName || `${userData.name}'s Kitchen`;

  // Calculate total progress
  const totalLessons = moduleData.reduce((acc, m) => acc + getModuleInfo(m.id).lessonCount, 0);
  const completedLessons = progress.completedLessons.length;
  const progressPercent = (completedLessons / totalLessons) * 100;

  const getLessonStatus = (lessonId: string, moduleId: number, lessonIndex: number): LessonStatus => {
    if (isLessonCompleted(lessonId)) return "completed";
    
    // Check if this is the first incomplete lesson in the module (in progress)
    const moduleLessons = getLessonsForModule(moduleId);
    const completedInModule = moduleLessons.filter(l => isLessonCompleted(l.id)).length;
    if (lessonIndex === completedInModule) return "in_progress";
    
    return "pending";
  };

  const handleModuleClick = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
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
        <div className={`sticky top-0 z-10 px-5 py-4 bg-gradient-to-r ${currentTheme?.gradient || "from-primary to-accent"}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{currentTheme?.emoji || "🍳"}</span>
            <h1 className="text-lg font-bold text-white drop-shadow-sm">
              {kitchenName}
            </h1>
          </div>
          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-white/90 font-medium">Your Progress</span>
              <span className="text-xs text-white/90 font-medium">{completedLessons} of {totalLessons} tasks</span>
            </div>
            <div className="h-2.5 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Module Cards */}
        <div className="px-4 py-4 space-y-4">
          {moduleData.map((module) => {
            const moduleInfo = getModuleInfo(module.id);
            const completedInModule = getModuleCompletedCount(module.id);
            const isExpanded = expandedModule === module.id;
            const lessons = getLessonsForModule(module.id);
            const moduleProgress = (completedInModule / moduleInfo.lessonCount) * 100;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
              >
                {/* Module Header */}
                <button
                  onClick={() => handleModuleClick(module.id)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <h2 className="font-semibold text-foreground text-base mb-2">
                      {module.title}
                    </h2>
                    {/* Module Progress Grid - Visual representation of tasks */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {Array.from({ length: Math.min(moduleInfo.lessonCount, 20) }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-2 rounded-sm ${
                            i < completedInModule 
                              ? "bg-green-500" 
                              : i === completedInModule 
                              ? "bg-orange-500" 
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{completedInModule} of {moduleInfo.lessonCount} tasks completed</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Expanded Lessons */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-3 space-y-2 max-h-[400px] overflow-y-auto">
                        {lessons.map((lesson, index) => {
                          const status = getLessonStatus(lesson.id, module.id, index);
                          
                          return (
                            <motion.button
                              key={lesson.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              onClick={() => handleLessonClick(lesson)}
                              className={`w-full p-4 rounded-xl text-left transition-all ${
                                status === "in_progress"
                                  ? "bg-orange-50 border-2 border-orange-200"
                                  : status === "completed"
                                  ? "bg-muted/30"
                                  : "bg-muted/20 hover:bg-muted/40"
                              }`}
                            >
                              {/* Status Badge */}
                              <div className="flex items-center gap-1.5 mb-2">
                                {status === "completed" ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <span className="text-xs font-medium text-green-700">Completed</span>
                                  </>
                                ) : status === "in_progress" ? (
                                  <>
                                    <Hourglass className="w-4 h-4 text-orange-600" />
                                    <span className="text-xs font-medium text-orange-600">In Progress</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3.5 h-3.5 text-muted-foreground" />
                                    <span className="text-xs font-medium text-muted-foreground">Pending</span>
                                  </>
                                )}
                              </div>

                              {/* Lesson Title */}
                              <h3 className={`font-medium text-sm mb-3 ${
                                status === "completed" ? "text-muted-foreground" : "text-foreground"
                              }`}>
                                {lesson.title}
                              </h3>

                              {/* Action Buttons */}
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1.5 rounded-md text-xs font-medium border ${
                                  status === "completed"
                                    ? "bg-muted border-border text-muted-foreground"
                                    : "bg-muted border-border text-muted-foreground"
                                }`}>
                                  {status === "completed" ? "Review" : "Start"}
                                </span>
                                <span className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                                  status === "completed"
                                    ? "bg-green-100 text-green-700"
                                    : "border border-border text-muted-foreground"
                                }`}>
                                  {status === "completed" ? "✓ Done" : "Mark Complete"}
                                </span>
                                <span className="px-3 py-1.5 rounded-md text-xs font-medium bg-orange-500 text-white">
                                  {lesson.duration}
                                </span>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
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
