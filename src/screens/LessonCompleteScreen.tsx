import { motion } from "framer-motion";
import { Trophy, Star, Flame, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface LessonCompleteScreenProps {
  lessonTitle: string;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  currentStreak: number;
  onContinue: () => void;
  cuisineGradient?: string;
  cuisineEmoji?: string;
}

const LessonCompleteScreen = ({
  lessonTitle,
  correctAnswers,
  totalQuestions,
  xpEarned,
  currentStreak,
  onContinue,
  cuisineGradient = "from-primary to-accent",
  cuisineEmoji = "🍳",
}: LessonCompleteScreenProps) => {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const isPerfect = correctAnswers === totalQuestions;

  // Trigger confetti on mount
  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: isPerfect ? 5 : 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#22c55e", "#eab308", "#3b82f6"],
      });
      confetti({
        particleCount: isPerfect ? 5 : 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#22c55e", "#eab308", "#3b82f6"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [isPerfect]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-background z-50 flex flex-col"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${cuisineGradient} opacity-10`} />

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Trophy Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
          className="mb-8"
        >
          <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${cuisineGradient} flex items-center justify-center shadow-2xl`}>
            {isPerfect ? (
              <Trophy className="w-14 h-14 text-white" />
            ) : (
              <span className="text-5xl">{cuisineEmoji}</span>
            )}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-foreground mb-2"
        >
          {isPerfect ? "Perfect!" : "Lesson Complete!"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground mb-8"
        >
          {lessonTitle}
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 w-full max-w-sm mb-8"
        >
          {/* Accuracy */}
          <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
            <div className={`text-2xl font-bold bg-gradient-to-r ${cuisineGradient} bg-clip-text text-transparent`}>
              {accuracy}%
            </div>
            <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
          </div>

          {/* XP Earned */}
          <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center justify-center gap-1">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-2xl font-bold text-amber-500">
                {xpEarned}
              </span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">XP Earned</div>
          </div>

          {/* Streak */}
          <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-2xl font-bold text-orange-500">
                {currentStreak}
              </span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Day Streak</div>
          </div>
        </motion.div>

        {/* Score Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground mb-8"
        >
          You got {correctAnswers} out of {totalQuestions} questions correct
        </motion.div>
      </div>

      {/* Bottom Action */}
      <div className="p-4 pb-8">
        <Button
          onClick={onContinue}
          className={`w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r ${cuisineGradient} hover:opacity-90`}
        >
          CONTINUE
          <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default LessonCompleteScreen;
