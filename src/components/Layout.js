import React from 'react';

import Container from './Container';
import { Navbar } from './Navbar/Navbar';
import Footer from './Footer/Footer'

function Layout({ children }) {
  return (
    <Container>
      <Navbar menu={[
        { name: "Home", to: "/" },
        { name: "Getting Involved", to: "/GettingInvolved" },
        { name: "News & Events", to: "/NewsAndEvents" },
        { name: "Resources", to: "/Resources" },
        { name: "About Us", to: "/AboutUs"}
      ]}
        color="#a8dadc"
      />
      <div style={{position: 'relative', top: '15vh'}}>
        {children}
      </div>
      <Footer />
    </Container>
  );
}

export default Layout;