export const createQuestionListResult = ({ questions }: { questions: Array<{ id: string; text: string }> }) =>
  Object.freeze({
    questions: Object.freeze(questions),
  });

export type QuestionListResult = ReturnType<typeof createQuestionListResult>;

export interface QuestionListQuery {
  (): Promise<QuestionListResult>;
}
