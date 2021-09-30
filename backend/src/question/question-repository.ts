import { QuestionDTO } from './question-dto';

export interface QuestionRepository {
  getAll(): Promise<Array<QuestionDTO>>;
}

export const createInMemoryQuestionRepository = ({
  questions,
}: {
  questions: Array<QuestionDTO>;
}): QuestionRepository => {
  return {
    async getAll() {
      return questions;
    },
  };
};
