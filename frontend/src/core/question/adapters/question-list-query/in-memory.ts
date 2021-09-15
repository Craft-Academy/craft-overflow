import { QuestionListResult, QuestionListQuery } from '../../use-cases/queries';

export const createInMemoryQuestionListQuery =
  ({
    existingQuestions = [],
    simulatedDelayInMs = 0,
  }: { existingQuestions?: QuestionListResult['questions']; simulatedDelayInMs?: number } = {}): QuestionListQuery =>
  () => {
    const res = {
      questions: existingQuestions,
    };
    if (!simulatedDelayInMs) return Promise.resolve(res);
    return new Promise((resolve) => setTimeout(() => resolve(res), simulatedDelayInMs));
  };
