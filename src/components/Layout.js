import React from 'react';

import Container from './Container';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Box } from '@chakra-ui/layout';

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
