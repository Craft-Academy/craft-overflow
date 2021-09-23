import { useBoolean, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';

export const useMobileMenuState = () => {
  const [isMenuOpen, actions] = useBoolean();
  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });

  React.useEffect(() => {
    if (isMobileBreakpoint == false) {
      actions.off();
    }
  }, [isMobileBreakpoint, actions]);

  return { isMenuOpen, ...actions };
};
