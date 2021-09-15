import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../useAppDispatch';
import { selectAllQuestions } from '../../core/question/selectors';
import { useCases } from '../../core/question';

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
      {isLoading && <div role="progressbar">Loading...</div>}
      <p>no questions yet</p>
    </>
  );
};
