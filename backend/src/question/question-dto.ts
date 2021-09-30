export const createQuestionDTO = ({ id, text }: { id: string; text: string }) =>
  Object.freeze({
    id,
    text,
  });

export type QuestionDTO = ReturnType<typeof createQuestionDTO>;
