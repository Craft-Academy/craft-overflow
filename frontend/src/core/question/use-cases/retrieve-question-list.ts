import { createAsyncThunk } from '@reduxjs/toolkit';
import { Question } from '../entities/question';
import { QuestionListQuery } from './queries';

export const retrieveQuestionList = createAsyncThunk<
  Readonly<{
    questions: Readonly<Array<Question>>;
  }>,
  void,
  { extra: { questionListQuery: QuestionListQuery } }
>('questions/retrieveQuestionList', async (_, { extra: { questionListQuery } }) => {
  return questionListQuery();
});
