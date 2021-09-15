import React from 'react';

interface QuestionListProps {
  questions?: Array<{
    id: string;
    text: string;
  }>;
}

export const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  if (questions) {
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
