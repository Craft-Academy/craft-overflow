import { createStore, RootState, StoreProps } from './store';
import { Question } from '../core/question/entities';
import { questionsAdapter, questionsInitialState, questionsSlice } from './question/slice';
import { createInMemoryQuestionListQuery } from './question/adapters/question-list-query';

type TestStoreProps = Partial<StoreProps> & {
  existingQuestions?: Array<Question>;
};

export const createTestStore = ({
  existingQuestions = [],
  questionListQuery = createInMemoryQuestionListQuery(),
  ...storeProps
}: TestStoreProps = {}) => {
  const questions = questionsAdapter.upsertMany(questionsInitialState, existingQuestions);

  const preloadedState: RootState = {
    [questionsSlice.name]: questions,
  };
  const store = createStore({ questionListQuery, preloadedState, ...storeProps });

  return store;
};
