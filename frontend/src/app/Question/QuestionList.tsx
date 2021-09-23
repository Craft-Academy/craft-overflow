import React, { useEffect, useState } from 'react';
import { CircularProgress, CircularProgressLabel, List, Heading, ListItem } from '@chakra-ui/react';
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
      <List>
        {questions.map((q) => (
          <ListItem key={q.id} mb={2}>
            <Heading as="h3" size="md" fontWeight="normal">
              {q.text}
            </Heading>
          </ListItem>
        ))}
      </List>
    );
  }
  return (
    <>
      {isLoading && <Loading />}
      <p>no questions yet</p>
    </>
  );
};
