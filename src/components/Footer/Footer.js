import React from 'react';
import { Stack, Flex, Link, Image, Box } from '@chakra-ui/react';
import pic from '../../assets/gtems.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSlack, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { Flex, Link } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Flex w="100%" bgColor="mint.300" mt={40} p={30} flexDirection={'column'}>
      <Flex mx='auto' flexDirection='row'>
        <Flex flexDirection='column' mb={10} mr={10}>
          <Link href='/'>
            <Box w='200px'>
              <Image src={pic}/>
            </Box>
          </Link>
          <Stack direction='row' ml={5} spacing={3} color="mint.700">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faSlack} size="2x" />
          </Stack>
        </Flex>
        <Stack direction="column" mt={2} spacing={1} w='150px' color='mint.700' fontSize={15}>
          <Link href="/gettinginvolved" fontWeight='bold'>
              Get Involved
          </Link>
          <Link href="/newsandevents">
              News & Events
          </Link>
          <Link href="/resources">
              Resources
          </Link>
          <Link href="/aboutus">
              About Us
          </Link>
        </Stack>
      </Flex>
      <Link
        target="_blank"
        href="https://dscgt.club"
        fontSize="lg"
        mx="auto"
        color="mint.700"
        _hover={{ textDecoration: 'none', color: 'mint.500' }}
      >
        Made with ♥️ by DSC@GT!
      </Link>
    </Flex>
  );
};

export default Footer;
