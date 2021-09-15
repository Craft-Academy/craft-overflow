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
        <li>What's the difference between TDD and Test-First ?</li>
        <li>How to avoid writing fragile test ?</li>
      </ul>
    );
  }
  return <>no questions yet</>;
};
