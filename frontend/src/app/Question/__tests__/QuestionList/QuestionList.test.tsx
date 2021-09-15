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
    const { render, expectToEventuallyContainQuestions } = QuestionListSUT()
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
    expectToEventuallyContainQuestions([
      "What's the difference between TDD and Test-First ?",
      'How to avoid writing fragile test ?',
    ]);
  });

  it('should show a loading indicator and eventually display the questions', async () => {
    // arrange
    const { render, expectQuestionsToBeLoading, expectToEventuallyContainQuestions } = QuestionListSUT()
      .withQuestionsToBeLoaded([
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
    expectQuestionsToBeLoading();
    await expectToEventuallyContainQuestions([
      "What's the difference between TDD and Test-First ?",
      'How to avoid writing fragile test ?',
    ]);
  });
});
