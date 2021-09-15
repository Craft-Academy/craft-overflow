import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createTestStore } from '../../../../core/test-store';
import { Provider } from 'react-redux';
import { QuestionList } from '../../QuestionList';
import { createInMemoryQuestionListQuery } from '../../../../core/question/adapters/question-list-query';

interface SUTProps {
  questions?: Array<{
    id: string;
    text: string;
  }>;
  questionsToBeLoaded?: Array<{
    id: string;
    text: string;
  }>;
}

export const QuestionListSUT = (props: SUTProps = {}) => {
  return {
    withoutQuestions() {
      return QuestionListSUT({
        ...props,
        questions: [],
      });
    },
    withExistingQuestions(questions: SUTProps['questions']) {
      return QuestionListSUT({
        ...props,
        questions,
      });
    },
    withQuestionsToBeLoaded(questionsToBeLoaded: SUTProps['questionsToBeLoaded']) {
      return QuestionListSUT({
        ...props,
        questionsToBeLoaded,
      });
    },
    build() {
      const questionListQuery = createInMemoryQuestionListQuery({ existingQuestions: props.questionsToBeLoaded });
      const store = createTestStore({
        existingQuestions: props.questions || [],
        questionListQuery,
      });

      return {
        render() {
          return render(
            <Provider store={store}>
              <QuestionList />
            </Provider>
          );
        },
        expectToNotHaveAnyQuestionDisplayed() {
          expect(screen.queryByText(/no questions yet/i)).toBeInTheDocument();
        },
        expectQuestionsToBeLoading() {
          expect(screen.queryByRole('progressbar')).toHaveTextContent(/loading.../i);
        },
        async expectToEventuallyContainQuestions(questionsText: Array<string>) {
          await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());
          const questions = screen.queryAllByRole('listitem');
          expect(questions).toHaveLength(questionsText.length);
          questionsText.forEach((questionText, index) => {
            expect(questions[index]).toHaveTextContent(questionText);
          });
        },
      };
    },
  };
};
