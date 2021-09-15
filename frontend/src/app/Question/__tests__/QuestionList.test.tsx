import React from 'react';
import { screen, render } from '@testing-library/react';
import { QuestionList } from '../QuestionList'

describe('QuestionList', () => {
  it('should show an empty state if there is no questions yet', () => {
    // act
    render(<QuestionList />)

    // assert
    expect(screen.queryByText(/no questions yet/i)).toBeInTheDocument()
  });
});

export {}