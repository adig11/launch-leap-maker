import { useState, useEffect, useCallback } from "react";

export interface ProgressData {
  completedLessons: string[]; // Array of lesson IDs
  currentStreak: number;
  lastActivityDate: string;
  totalTimeMinutes: number;
  moduleProgress: Record<number, number[]>; // moduleId -> array of completed lesson indices
}

const PROGRESS_KEY = "moonshot_progress";

const getDefaultProgress = (): ProgressData => ({
  completedLessons: [],
  currentStreak: 0,
  lastActivityDate: "",
  totalTimeMinutes: 0,
  moduleProgress: {},
});

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(getDefaultProgress);

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProgress(parsed);
      } catch {
        setProgress(getDefaultProgress());
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  const saveProgress = useCallback((newProgress: ProgressData) => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
    setProgress(newProgress);
  }, []);

  // Complete a lesson
  const completeLesson = useCallback((lessonId: string, moduleId: number, lessonIndex: number, durationMinutes: number) => {
    setProgress(prev => {
      const today = new Date().toDateString();
      const wasActiveToday = prev.lastActivityDate === today;
      const wasActiveYesterday = prev.lastActivityDate === new Date(Date.now() - 86400000).toDateString();
      
      let newStreak = prev.currentStreak;
      if (!wasActiveToday) {
        newStreak = wasActiveYesterday ? prev.currentStreak + 1 : 1;
      }

      const newProgress: ProgressData = {
        ...prev,
        completedLessons: prev.completedLessons.includes(lessonId) 
          ? prev.completedLessons 
          : [...prev.completedLessons, lessonId],
        currentStreak: newStreak,
        lastActivityDate: today,
        totalTimeMinutes: prev.totalTimeMinutes + durationMinutes,
        moduleProgress: {
          ...prev.moduleProgress,
          [moduleId]: prev.moduleProgress[moduleId]?.includes(lessonIndex)
            ? prev.moduleProgress[moduleId]
            : [...(prev.moduleProgress[moduleId] || []), lessonIndex],
        },
      };

      localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  // Check if a lesson is completed
  const isLessonCompleted = useCallback((lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  // Check if a module is completed (all lessons done)
  const isModuleCompleted = useCallback((moduleId: number, totalLessons: number) => {
    const completedInModule = progress.moduleProgress[moduleId]?.length || 0;
    return completedInModule >= totalLessons;
  }, [progress.moduleProgress]);

  // Get number of completed lessons in a module
  const getModuleCompletedCount = useCallback((moduleId: number) => {
    return progress.moduleProgress[moduleId]?.length || 0;
  }, [progress.moduleProgress]);

  // Get total completed modules
  const getCompletedModulesCount = useCallback((moduleLessonCounts: Record<number, number>) => {
    let count = 0;
    for (const [moduleId, lessonCount] of Object.entries(moduleLessonCounts)) {
      if (isModuleCompleted(Number(moduleId), lessonCount)) {
        count++;
      }
    }
    return count;
  }, [isModuleCompleted]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    const defaultProgress = getDefaultProgress();
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(defaultProgress));
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    completeLesson,
    isLessonCompleted,
    isModuleCompleted,
    getModuleCompletedCount,
    getCompletedModulesCount,
    resetProgress,
  };
};
