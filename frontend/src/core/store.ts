import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { questionsSlice } from './question/slice';
import { QuestionListQuery } from './question/use-cases/queries';

const rootReducer = combineReducers({
  [questionsSlice.name]: questionsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = ({ questionListQuery }: { questionListQuery: QuestionListQuery }) => {
  const store = configureStore({
    reducer: combineReducers({
      [questionsSlice.name]: questionsSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            questionListQuery,
          },
        },
      }),
  });

  return store;
};
