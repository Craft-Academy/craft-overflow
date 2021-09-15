import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { retrieveQuestionList } from './use-cases';
import { Question } from './entities/question';

export const questionsAdapter = createEntityAdapter<Question>();

export const questionsInitialState = questionsAdapter.getInitialState();

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: questionsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveQuestionList.fulfilled, (state, action) => {
      questionsAdapter.setAll(state, action.payload.questions);
    });
  },
});
