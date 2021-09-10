import { RootState } from '../store';
import { questionsAdapter } from './slice';

const questionsSelectors = questionsAdapter.getSelectors<RootState>((state) => state.questions);

export const selectAllQuestions = (state: RootState) => {
  const questions = questionsSelectors.selectAll(state);

  return {
    questions,
  };
};
