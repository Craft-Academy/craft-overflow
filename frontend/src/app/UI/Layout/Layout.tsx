import { Flex, HStack, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { ProfileDropdown } from './ProfileDropdown';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex direction="column" bg={mode('gray.100', 'gray.800')} height="100vh">
      <Flex align="center" bg="blue.600" color="white" px="6" minH="16">
        <Flex justify="space-between" align="center" w="full">
          {/* Desktop Logo placement */}
          <Logo display={{ base: 'none', lg: 'block' }} flexShrink={0} h="5" marginEnd="10" />

          <HStack spacing="3">
            <ProfileDropdown />
          </HStack>
        </Flex>
      </Flex>

      <PageHeader />
      <PageContent>{children}</PageContent>
    </Flex>
  );
};
