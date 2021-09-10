import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { retrieveQuestionList } from './use-cases';
import { Question } from './entities/question';

export const questionsAdapter = createEntityAdapter<Question>();

questionsAdapter.getInitialState();

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: questionsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveQuestionList.fulfilled, (state, action) => {
      questionsAdapter.setAll(state, action.payload.questions);
    });
  },
});
