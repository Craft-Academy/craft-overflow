import { Box, Center, CenterProps } from '@chakra-ui/react';
import * as React from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationBadge = (props: CenterProps) => (
  <Center
    bg="red.500"
    fontSize="xs"
    fontWeight="bold"
    position="absolute"
    rounded="full"
    textAlign="center"
    top="-2px"
    insetEnd="0"
    w="18px"
    h="18px"
    {...props}
  />
);

export const Notification = (props: CenterProps) => (
  <Center
    as="button"
    outline="0"
    w="8"
    h="8"
    position="relative"
    rounded="md"
    _hover={{ bg: 'whiteAlpha.200' }}
    _focus={{ shadow: 'outline' }}
    {...props}
  >
    <Box srOnly>Click to see 9 notifications</Box>
    <NotificationBadge>9</NotificationBadge>
    <Box as={FaBell} fontSize="lg" />
  </Center>
);
