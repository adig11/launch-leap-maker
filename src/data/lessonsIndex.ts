// Central export for all business path lessons
import { LessonData } from './lessonData';
import { allCreatorLessons } from './lessons/creatorLessons';
import { allEcommerceLessons } from './lessons/ecommerceLessons';
import { allStockTraderLessons } from './lessons/stockTraderLessons';
import { allLessons as allCloudKitchenLessons } from './lessonData';
import { getBusinessPath, BusinessPath, ModuleDefinition } from './businessPaths';

// Get all lessons for a business type
export const getLessonsForBusinessType = (businessType: string): LessonData[] => {
  switch (businessType) {
    case "creator":
      return allCreatorLessons;
    case "ecommerce":
      return allEcommerceLessons;
    case "stock-trader":
      return allStockTraderLessons;
    case "cloud-kitchen":
    default:
      return allCloudKitchenLessons;
  }
};

// Get lessons for a specific module within a business type
export const getModuleLessons = (businessType: string, moduleId: number): LessonData[] => {
  const allLessons = getLessonsForBusinessType(businessType);
  return allLessons.filter(lesson => lesson.moduleId === moduleId);
};

// Get module info with completion data
export const getModuleWithProgress = (
  businessType: string, 
  moduleId: number,
  completedLessonIds: string[]
): { module: ModuleDefinition; completedCount: number; totalCount: number } => {
  const path = getBusinessPath(businessType);
  const module = path.modules.find(m => m.id === moduleId);
  const lessons = getModuleLessons(businessType, moduleId);
  const completedCount = lessons.filter(l => completedLessonIds.includes(l.id)).length;
  
  return {
    module: module!,
    completedCount,
    totalCount: lessons.length
  };
};

// Re-export types and helpers
export { getBusinessPath, type BusinessPath, type ModuleDefinition } from './businessPaths';
export type { LessonData, Question, QuestionType } from './lessonData';
