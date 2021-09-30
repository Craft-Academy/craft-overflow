import { createInMemoryQuestionRepository } from '../question-repository';
import { createQuestionService } from '../question-service';

describe('all questions', () => {
  it('can retrieve all questions', async () => {
    // arrange
    const questionRepository = createInMemoryQuestionRepository({
      questions: [
        {
          id: 'id1',
          text: 'What is TDD ?',
        },
        {
          id: 'id2',
          text: 'When can we bypass TDD and use Test-First instead ?',
        },
      ],
    });
    const questionService = createQuestionService({ questionRepository });

    // act
    const questions = await questionService.allQuestions();

    // assert
    expect(questions).toEqual([
      {
        id: 'id1',
        text: 'What is TDD ?',
      },
      {
        id: 'id2',
        text: 'When can we bypass TDD and use Test-First instead ?',
      },
    ]);
  });
});
