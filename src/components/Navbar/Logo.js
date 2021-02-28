/* eslint-disable no-unused-expressions */

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Box, Text } from '@chakra-ui/react';
library.add(fab);

const Logo = props => {
  return (
    <Box {...props}>
      <Text fontSize="3xl" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
