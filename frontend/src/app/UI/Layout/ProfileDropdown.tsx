import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  Text,
  useMenuButton,
  UseMenuButtonProps,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

const ProfileMenuButton = (props: UseMenuButtonProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex {...buttonProps} as="button" flexShrink={0} rounded="full" outline="0" _focus={{ shadow: 'outline' }}>
      <Box srOnly>Open user menu</Box>
    </Flex>
  );
};

export const ProfileDropdown = () => (
  <Menu>
    <ProfileMenuButton />
    <MenuList rounded="md" shadow="lg" py="1" color={mode('gray.600', 'inherit')} fontSize="sm">
      <HStack px="3" py="4">
        <Box lineHeight="1">
          <Text fontWeight="semibold">Manny Broke</Text>
          <Text mt="1" fontSize="xs" color="gray.500">
            manny@chakra-ui.com
          </Text>
        </Box>
      </HStack>
      <MenuItem fontWeight="medium">Your Profile</MenuItem>
      <MenuItem fontWeight="medium">Feedback & Support</MenuItem>
      <MenuItem fontWeight="medium">Account Settings</MenuItem>
      <MenuItem fontWeight="medium" color={mode('red.500', 'red.300')}>
        Sign out
      </MenuItem>
    </MenuList>
  </Menu>
);
