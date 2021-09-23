import { Box, BoxProps, Container, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

export const PageContent = (props: BoxProps & { children: React.ReactNode }) => (
  <Box as="main" py="8" flex="1" {...props}>
    <Container maxW="7xl">
      <Box bg={useColorModeValue('white', 'gray.700')} p="6" rounded="lg" shadow="base">
        {props.children}
      </Box>
    </Container>
  </Box>
);
