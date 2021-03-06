import React from 'react';
import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box color={'white'} display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon fontSize="2xl" /> : <HamburgerIcon fontSize="2xl" />}
    </Box>
  );
};

export default MenuToggle;
