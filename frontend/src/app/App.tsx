import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { createInMemoryQuestionListQuery } from '../core/question/adapters/question-list-query';
import { createStore } from '../core/store';
import { QuestionList } from './Question';

const store = createStore({
  questionListQuery: createInMemoryQuestionListQuery({
    simulatedDelayInMs: 2000,
    existingQuestions: [
      {
        id: 'q1',
        text: "What's the difference between TDD and Test-First ?",
      },
      {
        id: 'q2',
        text: 'How to avoid writing fragile test ?',
      },
      {
        id: 'q3',
        text: "That's so cool ! Don't you think ?",
      },
    ],
  }),
});

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <QuestionList />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
