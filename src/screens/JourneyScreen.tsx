import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { ChevronRightIcon } from "@/components/icons";
import { UserData } from "@/pages/Index";
import { useProgress } from "@/hooks/useProgress";
import { getModuleLessons, getBusinessPath } from "@/data/lessonsIndex";
import { LessonData } from "@/data/lessonData";
import LessonScreen from "@/screens/LessonScreen";
import LessonCompleteScreen from "@/screens/LessonCompleteScreen";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ChevronLeft, Lock, CheckCircle2, Play } from "lucide-react";

interface JourneyScreenProps {
  activeTab: "home" | "journey" | "profile";
  onTabChange: (tab: "home" | "journey" | "profile") => void;
  userData: UserData;
}

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
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const { progress, completeLesson, isLessonCompleted } = useProgress();

  const businessLabel = businessLabels[userData.businessType] || "Cloud Kitchen";
  const businessPath = getBusinessPath(userData.businessType);

  // Calculate progress
  const totalLessons = businessPath.modules.reduce((acc, m) => acc + m.lessonsCount, 0);
  const completedLessons = progress.completedLessons.length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  // Determine module status
  const getModuleStatus = (moduleId: number): "completed" | "current" | "locked" => {
    const lessons = getModuleLessons(userData.businessType, moduleId);
    const completedCount = lessons.filter(l => isLessonCompleted(l.id)).length;
    if (completedCount === lessons.length && lessons.length > 0) return "completed";
    if (moduleId === 1 || getModuleStatus(moduleId - 1) === "completed") return "current";
    return "locked";
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

  const handleLessonClose = () => setActiveLesson(null);
  const handleCompleteClose = () => { setShowComplete(false); setActiveLesson(null); };

  return (
    <>
      <MobileLayout showNav activeTab={activeTab} onTabChange={onTabChange}>
        {/* Header */}
        <motion.div className="px-5 pt-6 pb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => onTabChange("home")} className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
              <ChevronLeft className="w-5 h-5 text-secondary" />
            </button>
            <div className="text-center">
              <h1 className="font-bold text-secondary">{businessLabel}</h1>
              <p className="text-xs text-primary font-medium tracking-wide uppercase">Your Journey</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
              <MoreHorizontal className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </motion.div>

        {/* Progress Card */}
        <motion.div className="mx-5 mb-4 rounded-2xl bg-white border border-border p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Overall Progress</p>
            <span className="px-2 py-1 rounded-full bg-[#FDF0E8] text-xs font-medium text-primary">{completedLessons}/{totalLessons} Lessons</span>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-3xl font-bold text-secondary">{progressPercent}%</span>
            <span className="text-muted-foreground text-sm">complete</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div className={`h-full bg-gradient-to-r ${businessPath.gradient} rounded-full`} initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }} transition={{ duration: 0.8 }} />
          </div>
        </motion.div>

        {/* Modules List */}
        <div className="px-5 pb-8 space-y-3">
          {businessPath.modules.map((module, index) => {
            const status = getModuleStatus(module.id);
            const lessons = getModuleLessons(userData.businessType, module.id);
            const completedCount = lessons.filter(l => isLessonCompleted(l.id)).length;
            const isExpanded = expandedModule === module.id;

            return (
              <motion.div key={module.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.05 }}
                className={`rounded-2xl border ${status === "locked" ? "bg-muted/50 border-border opacity-60" : "bg-white border-border shadow-sm"}`}>
                <button onClick={() => status !== "locked" && setExpandedModule(isExpanded ? null : module.id)} className="w-full p-4 flex items-center gap-4 text-left" disabled={status === "locked"}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${status === "completed" ? "bg-green-100" : status === "current" ? `bg-gradient-to-br ${businessPath.gradient} text-white` : "bg-muted"}`}>
                    {status === "completed" ? <CheckCircle2 className="w-6 h-6 text-green-600" /> : status === "locked" ? <Lock className="w-5 h-5 text-muted-foreground" /> : module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold truncate ${status === "locked" ? "text-muted-foreground" : "text-secondary"}`}>{module.title}</h3>
                    <p className="text-xs text-muted-foreground">{completedCount}/{lessons.length} lessons • {module.estimatedTime}</p>
                  </div>
                  {status !== "locked" && <ChevronRightIcon className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`} />}
                </button>

                <AnimatePresence>
                  {isExpanded && status !== "locked" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-4 pb-4 space-y-2">
                        {lessons.map((lesson, li) => {
                          const completed = isLessonCompleted(lesson.id);
                          return (
                            <button key={lesson.id} onClick={() => handleLessonClick(lesson)} className={`w-full p-3 rounded-xl flex items-center gap-3 text-left transition-colors ${completed ? "bg-green-50 border border-green-200" : "bg-muted/50 hover:bg-muted"}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${completed ? "bg-green-500 text-white" : `bg-gradient-to-br ${businessPath.gradient} text-white`}`}>
                                {completed ? <CheckCircle2 className="w-4 h-4" /> : <Play className="w-3 h-3 ml-0.5" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium truncate ${completed ? "text-green-700" : "text-secondary"}`}>{lesson.title}</p>
                                <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                              </div>
                            </button>
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

      <AnimatePresence>
        {activeLesson && !showComplete && (
          <LessonScreen lesson={activeLesson} onComplete={handleLessonComplete} onClose={handleLessonClose} cuisineGradient={businessPath.gradient} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showComplete && activeLesson && (
          <LessonCompleteScreen lessonTitle={activeLesson.title} correctAnswers={lessonScore.correct} totalQuestions={lessonScore.total} currentStreak={progress.currentStreak} xpEarned={lessonScore.correct * 10} onContinue={handleCompleteClose} />
        )}
      </AnimatePresence>
    </>
  );
};

export default JourneyScreen;
