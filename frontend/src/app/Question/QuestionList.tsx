import React, { useEffect, useState } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../useAppDispatch';
import { selectAllQuestions } from '../../core/question/selectors';
import { useCases } from '../../core/question';

const Loading: React.FC = () => (
  <CircularProgress isIndeterminate>
    <CircularProgressLabel>Loading...</CircularProgressLabel>
  </CircularProgress>
);

export const QuestionList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { questions } = useSelector(selectAllQuestions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(useCases.retrieveQuestionList()).then(() => setIsLoading(false));
  }, [dispatch, setIsLoading]);

  if (questions.length > 0) {
    return (
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ul>
    );
  }
  return (
    <>
      {isLoading && <Loading />}
      <p>no questions yet</p>
    </>
  );
};
