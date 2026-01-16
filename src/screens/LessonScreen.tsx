import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronRight, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonData, Question } from "@/data/lessonData";
import { Progress } from "@/components/ui/progress";

interface LessonScreenProps {
  lesson: LessonData;
  onComplete: () => void;
  onClose: () => void;
  cuisineGradient?: string;
}

const LessonScreen = ({ lesson, onComplete, onClose, cuisineGradient = "from-primary to-accent" }: LessonScreenProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = lesson.questions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / lesson.questions.length) * 100;

  // Reset state when question changes
  useEffect(() => {
    setSelectedChoice(null);
    setIsChecked(false);
    setIsCorrect(false);
    setShowExplanation(false);
  }, [currentQuestionIndex]);

  // Handle choice selection
  const handleChoiceSelect = (choice: string) => {
    if (isChecked) return;
    setSelectedChoice(choice);
  };

  // Check the answer
  const handleCheck = () => {
    const correct = selectedChoice === currentQuestion.correctAnswer[0];
    setIsCorrect(correct);
    setIsChecked(true);
    setShowExplanation(true);
    
    if (correct) {
      setCorrectCount(prev => prev + 1);
    }
  };

  // Continue to next question or complete
  const handleContinue = () => {
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  // Get question type label
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "scenario": return "SCENARIO";
      case "calculation": return "CALCULATE";
      case "true-false": return "TRUE OR FALSE";
      default: return "SELECT ONE";
    }
  };

  const canCheck = selectedChoice !== null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 flex flex-col"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
          <div className="flex-1">
            <Progress value={progressPercent} className="h-2.5" />
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-amber-500">{correctCount}</span>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 overflow-auto p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {/* Question Type Badge */}
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${cuisineGradient} text-white uppercase tracking-wide`}>
                {getTypeLabel(currentQuestion.type)}
              </span>
              <span className="text-sm text-muted-foreground">
                {currentQuestionIndex + 1} of {lesson.questions.length}
              </span>
            </div>

            {/* Context/Scenario Box */}
            {currentQuestion.context && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-muted/50 border border-border rounded-xl p-4"
              >
                <p className="text-sm text-foreground leading-relaxed">
                  {currentQuestion.context}
                </p>
              </motion.div>
            )}

            {/* Question Prompt */}
            <h2 className="text-lg font-bold text-foreground leading-tight">
              {currentQuestion.prompt}
            </h2>

            {/* Choices */}
            <div className="space-y-3">
              {currentQuestion.choices.map((choice, index) => {
                const isSelected = selectedChoice === choice;
                const isCorrectChoice = choice === currentQuestion.correctAnswer[0];
                
                let containerClass = "bg-card border-border hover:border-primary/50 hover:bg-muted/50";
                let textClass = "text-foreground";
                let indicatorClass = "border-muted-foreground/50";
                
                if (isChecked) {
                  if (isCorrectChoice) {
                    containerClass = "bg-success/15 border-success";
                    indicatorClass = "border-success bg-success";
                  } else if (isSelected && !isCorrectChoice) {
                    containerClass = "bg-destructive/15 border-destructive";
                    indicatorClass = "border-destructive bg-destructive";
                  } else {
                    containerClass = "bg-card border-border opacity-50";
                  }
                } else if (isSelected) {
                  containerClass = `bg-gradient-to-r ${cuisineGradient} border-transparent shadow-lg`;
                  textClass = "text-white";
                  indicatorClass = "border-white bg-white/30";
                }

                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleChoiceSelect(choice)}
                    disabled={isChecked}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${containerClass}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors ${indicatorClass}`}>
                        {isChecked && isCorrectChoice && (
                          <Check className="w-4 h-4 text-success-foreground" />
                        )}
                        {isChecked && isSelected && !isCorrectChoice && (
                          <X className="w-4 h-4 text-destructive-foreground" />
                        )}
                        {!isChecked && isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={`flex-1 font-medium text-sm leading-relaxed ${textClass}`}>
                        {choice}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`p-4 rounded-xl ${
                    isCorrect 
                      ? "bg-success/10 border border-success/30" 
                      : "bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800"
                  }`}>
                    <div className="flex gap-3">
                      <Lightbulb className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        isCorrect ? "text-success" : "text-amber-600 dark:text-amber-400"
                      }`} />
                      <div className="space-y-2">
                        <p className={`font-bold ${
                          isCorrect ? "text-success" : "text-amber-700 dark:text-amber-400"
                        }`}>
                          {isCorrect ? "Correct! 🎉" : "Not quite right"}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                        {currentQuestion.proTip && (
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <p className="text-xs font-semibold text-primary mb-1">💡 PRO TIP</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {currentQuestion.proTip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Action */}
      <div className="p-4 border-t border-border bg-background safe-area-inset-bottom">
        {!isChecked ? (
          <Button
            onClick={handleCheck}
            disabled={!canCheck}
            className={`w-full h-14 text-lg font-bold rounded-xl transition-all ${
              canCheck 
                ? `bg-gradient-to-r ${cuisineGradient} hover:opacity-90 shadow-lg` 
                : "bg-muted text-muted-foreground"
            }`}
          >
            CHECK ANSWER
          </Button>
        ) : (
          <Button
            onClick={handleContinue}
            className={`w-full h-14 text-lg font-bold rounded-xl shadow-lg bg-gradient-to-r ${
              isCorrect ? "from-success to-emerald-500" : cuisineGradient
            } hover:opacity-90`}
          >
            {currentQuestionIndex < lesson.questions.length - 1 ? (
              <>
                CONTINUE
                <ChevronRight className="w-5 h-5 ml-1" />
              </>
            ) : (
              <>
                COMPLETE LESSON
                <Check className="w-5 h-5 ml-1" />
              </>
            )}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default LessonScreen;
