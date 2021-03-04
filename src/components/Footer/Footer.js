import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Flex w="100%" bgColor="teal.100" mt={40} p={30}>
      <Link
        target="_blank"
        href="https://dscgt.club"
        fontSize="lg"
        mx="auto"
        color="teal.500"
        _hover={{ textDecoration: 'none', color: 'teal.800' }}
      >
        Made with ♥️ by DSC@GT!
      </Link>
    </Flex>
  );
};

export default Footer;
