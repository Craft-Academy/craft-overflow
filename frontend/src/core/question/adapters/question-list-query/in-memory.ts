import { QuestionListResult, QuestionListQuery } from '../../use-cases/queries';

export const createInMemoryQuestionListQuery =
  ({ existingQuestions = [] }: { existingQuestions?: QuestionListResult['questions'] }): QuestionListQuery =>
  async () => ({
    questions: existingQuestions,
  });
