import React, { useState } from 'react';
import { Box, Stack, Flex, Button } from '@chakra-ui/react';
import Logo from './Logo';

import MenuToggle from './MenuToggle';
import MenuItem from './MenuItem';

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={['teal.400', 'teal.400', 'white', 'white']}
      {...props}
    >
      <Logo w="100px" color={['white', 'white', 'teal.400', 'teal.400']} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'column', 'row', 'row']}
          pt={[4, 4, 0, 0]}
          color={['white', 'white', 'teal.400', 'teal.400']}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/NewsAndEvents">News & Events</MenuItem>
          <MenuItem to="/Resources">Resources</MenuItem>
          <MenuItem to="/AboutUs">About Us</MenuItem>
          <Button
            backgroundColor="teal.600"
            color="white"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="lg"
          >
            <MenuItem to="/GettingInvolved">Get Involved</MenuItem>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Navbar;
