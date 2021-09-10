import { retrieveQuestionListSUT } from './sut-builder';

describe('retrieving question list', () => {
  test('can retrieve empty question list', () => {
    // arrange
    const { selectAllQuestions } = retrieveQuestionListSUT().withoutQuestions().build();

    // assert
    expect(selectAllQuestions()).toEqual({
      questions: [],
    });
  });

  test('can retrieve question list with many questions', async () => {
    // arrange
    const { selectAllQuestions, retrieveQuestionList } = retrieveQuestionListSUT()
      .withExistingQuestions([
        {
          id: 'id1',
          text: "What's the difference between TDD and Test-First ?",
        },
        {
          id: 'id2',
          text: 'How to avoid writing fragile test',
        },
      ])
      .build();

    //act
    await retrieveQuestionList();

    // assert
    expect(selectAllQuestions()).toEqual({
      questions: [
        {
          id: 'id1',
          text: "What's the difference between TDD and Test-First ?",
        },
        {
          id: 'id2',
          text: 'How to avoid writing fragile test',
        },
      ],
    });
  });
});
