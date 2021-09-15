import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QuestionList } from '../QuestionList';
import { createTestStore } from '../../../core/test-store';

describe('QuestionList', () => {
  it('should show an empty state if there is no questions yet', () => {
    const store = createTestStore();
    // act
    render(
      <Provider store={store}>
        <QuestionList />
      </Provider>
    );

    // assert
    expect(screen.queryByText(/no questions yet/i)).toBeInTheDocument();
  });

  it('should display the available questions', () => {
    // arrange
    const store = createTestStore({
      existingQuestions: [
        {
          id: 'q1',
          text: "What's the difference between TDD and Test-First ?",
        },
        {
          id: 'q2',
          text: 'How to avoid writing fragile test ?',
        },
      ],
    });

    // act
    render(
      <Provider store={store}>
        <QuestionList />
      </Provider>
    );

    // assert
    const questions = screen.queryAllByRole('listitem');
    expect(questions).toHaveLength(2);
    expect(questions[0]).toHaveTextContent("What's the difference between TDD and Test-First ?");
    expect(questions[1]).toHaveTextContent('How to avoid writing fragile test ?');
  });
});
