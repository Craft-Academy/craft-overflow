import { QuestionRepository } from './question-repository';

export const createQuestionService = ({ questionRepository }: { questionRepository: QuestionRepository }) => {
  return {
    async allQuestions() {
      return questionRepository.getAll();
    },
  };
};

export type QuestionService = ReturnType<typeof createQuestionService>;
