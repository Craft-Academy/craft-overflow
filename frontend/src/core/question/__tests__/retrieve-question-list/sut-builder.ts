import { selectors, useCases } from '../..';
import { createStore } from '../../../store';
import { createInMemoryQuestionListQuery } from '../../adapters/question-list-query';

interface SUTProps {
  questions?: Array<{
    id: string;
    text: string;
  }>;
}

export const retrieveQuestionListSUT = (props: SUTProps = {}) => {
  return {
    withoutQuestions() {
      return retrieveQuestionListSUT({
        ...props,
        questions: [],
      });
    },
    withExistingQuestions(questions: SUTProps['questions']) {
      return retrieveQuestionListSUT({
        ...props,
        questions,
      });
    },
    build() {
      const questionListQuery = createInMemoryQuestionListQuery({ existingQuestions: props.questions });
      const store = createStore({ questionListQuery });
      const selectAllQuestions = () => selectors.selectAllQuestions(store.getState());
      const retrieveQuestionList = async () => store.dispatch(useCases.retrieveQuestionList());

      return {
        selectAllQuestions,
        retrieveQuestionList,
      };
    },
  };
};
