import React from 'react';
import { render, screen } from '@testing-library/react';
import { createTestStore } from '../../../../core/test-store';
import { Provider } from 'react-redux';
import { QuestionList } from '../../QuestionList';

interface SUTProps {
  questions?: Array<{
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
    build() {
      const store = createTestStore({
        existingQuestions: props.questions || [],
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
        expectToContainQuestions(questionsText: Array<string>) {
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
