import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QuestionList } from '../../QuestionList';
import { createTestStore } from '../../../../core/test-store';
import { QuestionListSUT } from './sut-builder';

describe('QuestionList', () => {
  it('should show an empty state if there is no questions yet', () => {
    const { render, expectToNotHaveAnyQuestionDisplayed } = QuestionListSUT().withoutQuestions().build();

    // act
    render();

    // assert
    expectToNotHaveAnyQuestionDisplayed();
  });

  it('should display the available questions', () => {
    // arrange
    const { render, expectToContainQuestions } = QuestionListSUT()
      .withExistingQuestions([
        {
          id: 'q1',
          text: "What's the difference between TDD and Test-First ?",
        },
        {
          id: 'q2',
          text: 'How to avoid writing fragile test ?',
        },
      ])
      .build();

    // act
    render();

    // assert
    expectToContainQuestions([
      "What's the difference between TDD and Test-First ?",
      'How to avoid writing fragile test ?',
    ]);
  });
});
