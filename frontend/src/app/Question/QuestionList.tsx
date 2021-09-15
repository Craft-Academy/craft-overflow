import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllQuestions } from '../../core/question/selectors';

export const QuestionList: React.FC = () => {
  const { questions } = useSelector(selectAllQuestions);
  if (questions.length > 0) {
    return (
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ul>
    );
  }
  return <>no questions yet</>;
};
