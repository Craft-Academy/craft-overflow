import { Box, Flex, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { HiDuplicate, HiMail, HiRefresh, HiTemplate, HiViewGrid } from 'react-icons/hi';
import { NavItem } from './NavItem';

const MobileNavMenu = (props: { isOpen?: boolean }) => {
  const { isOpen } = props;
  return (
    <Flex
      hidden={!isOpen}
      as="nav"
      direction="column"
      bg="blue.600"
      position="fixed"
      height="calc(100vh - 4rem)"
      top="16"
      insetX="0"
      zIndex={10}
      w="full"
    >
      <Box px="4">
        <NavItem.Mobile active label="Dashboard" />
      </Box>
    </Flex>
  );
};

const DesktopNavMenu = () => (
  <HStack spacing="3" flex="1" display={{ base: 'none', lg: 'flex' }}>
    <NavItem.Desktop active icon={<HiViewGrid />} label="Top Questions" />
  </HStack>
);

export const NavMenu = {
  Mobile: MobileNavMenu,
  Desktop: DesktopNavMenu,
};
