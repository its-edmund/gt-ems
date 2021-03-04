/* eslint-disable no-unused-expressions */

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Box, Image, Link } from '@chakra-ui/react';
import pic from '../../assets/gtems.png';
library.add(fab);

const Logo = props => {
  return (
    <Box {...props}>
      <Link to='/'>
        <Image src={pic}/>
      </Link>
    </Box>
  );
};

export default Logo;
