/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Flex, Heading, Image, Link, Stack, Button, Text } from '@chakra-ui/react';

import landingpic from '../../assets/gt.jpg';
import Map from '../Map/Map';
import Layout from '../Layout';

const HOMEPAGEQUERY = gql`
  query HomepageText {
    homepageText(id: "4tuLaiJsGbSYTlZVcUz8mj") {
      jumbotronTitle
      jumbotronSubtitle
      jumbotronButtonText
      jumbotronButtonLink
      emergencyContact
      paragraphOneTitle
      paragraphOneBody
      paragraphTwoTitle
      paragraphTwoBody
    }
  }
`;

const Homepage = () => {
  const { data, errors, loading } = useQuery(HOMEPAGEQUERY);

  console.log(errors);

  return loading ? (
    <div></div>
  ) : (
    <Layout>
      <Flex
        align="center"
        justify={{
          base: 'center',
          md: 'space-around',
          xl: 'space-between',
        }}
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        wrap="no-wrap"
        minH="auto"
        px={{ base: 8, md: 40 }}
        mb={{ base: 8, md: 50 }}
        height="container.sm"
      >
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }}
            fontWeight="bold"
            color="mint.700"
            textAlign={['center', 'center', 'left', 'left']}
          >
            {data.homepageText.jumbotronTitle}
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="mint.500"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {data.homepageText.jumbotronSubtitle}
          </Heading>
          <Link textDecoration="none" href="/gettinginvolved">
            <Button
              backgroundColor="mint.700"
              color="white"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="lg"
              _hover={{ bg: 'mint.300' }}
            >
              Join our Team →
            </Button>
          </Link>
        </Stack>
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
          <Image src={landingpic} rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
      <Flex
        align="center"
        justify={{
          base: 'center',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        wrap="no-wrap"
        minH="auto"
        w={{ base: '80%', md: '60%' }}
        mb={{ base: 8, md: 50 }}
        mx="auto"
      >
        <Stack spacing={4} w={{ base: '80%', md: '80%' }} align="center">
          <Heading
            as="h1"
            size="xl"
            color="mint.700"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {data.homepageText.paragraphOneTitle}
          </Heading>
          <Text color="mint.500" fontSize="2xl">
            {data.homepageText.paragraphOneBody}
          </Text>
          <Link textDecoration="none" href="/resources">
            <Button
              backgroundColor="mint.700"
              color="white"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              _hover={{ bg: 'mint.300' }}
              size="lg"
            >
              Resources
            </Button>
          </Link>
        </Stack>
        <Box
          mt={{ base: 30, md: 0 }}
          ml={{base: 0, md: 10}}
          w={{ base: '80%', md: '96' }}
          p={10}
          bgColor="mint.300"
          borderRadius="lg"
          shadow="lg"
        >
          <Heading as="h2" size="lg" color="mint.700" fontWeight="bold">
            Emergency Contact
          </Heading>
          <Text color="mint.500" fontSize="lg">
            {data.homepageText.emergencyContact}
          </Text>
        </Box>
      </Flex>
      <svg height="100%" width="100%" id="bg-svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 C 0,400 0,200 0,200 C 111.21428571428572,203.75 222.42857142857144,207.5 333,223 C 443.57142857142856,238.5 553.5000000000001,265.75 679,260 C 804.4999999999999,254.25 945.5714285714284,215.5 1075,200 C 1204.4285714285716,184.5 1322.2142857142858,192.25 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#cae7e8ff" className="transition-all duration-300 ease-in-out delay-150" />
        <path d="M 0,400 C 0,400 0,200 0,200 C 143.14285714285714,207.42857142857144 286.2857142857143,214.85714285714286 395,206 C 503.7142857142857,197.14285714285714 578,172.00000000000003 674,152 C 770,131.99999999999997 887.7142857142858,117.14285714285714 1019,126 C 1150.2857142857142,134.85714285714286 1295.142857142857,167.42857142857144 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fillOpacity="0.5" fill="#cae7e8ff" className="transition-all duration-300 ease-in-out delay-150" />
      </svg>
      {/* <svg
        width="100%"
        viewBox="0 0 2400 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsSerif="http://www.serif.com/"
      >
        <g transform="matrix(1,0,0,1,0,-400)">
          <g transform="matrix(1.66667,0,0,1.40851,0,349.276)">
            <path
              d="M0,96L48,112C96,128 192,160 288,160C384,160 480,128 576,101.3C672,75 768,53 864,42.7C960,32 1056,32 1152,58.7C1248,85 1344,139 1392,165.3L1440,192L1440,320L0,320L0,96Z"
              fill='#cae7e8'
              fillOpacity="50%"
            />
          </g>
          <g transform="matrix(1.66667,0,0,1.31021,0,380.731)">
            <path
              d="M0,64L48,53.3C96,43 192,21 288,16C384,11 480,21 576,37.3C672,53 768,75 864,101.3C960,128 1056,160 1152,160C1248,160 1344,128 1392,112L1440,96L1440,320L0,320L0,64Z"
              fill='#cae7e8'
            />
          </g>
        </g>
      </svg> */}
      <Flex
        bgColor='#cae7e8'
        align="center"
        justify={{
          base: 'center',
        }}
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        wrap="no-wrap"
        minH="auto"

      >
        <Stack spacing={4} w={{ base: '60%' }} align="center">
          <Heading
            as="h1"
            size="xl"
            color="mint.700"
            opacity="1"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            Who Are We?
          </Heading>
          <Text color="mint.500" fontSize="2xl">
            We are an on-campus organization that is striving to make Georgia Tech a safer place.
          </Text>
        </Stack>
      </Flex>
      <svg height="100%" width="100%" id="bg-svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <g transform="matrix(-1.66667,-2.04108e-16,2.39768e-16,-1.95785,2400,626.513)">
          <path d="M 0,400 C 0,400 0,200 0,200 C 111.21428571428572,203.75 222.42857142857144,207.5 333,223 C 443.57142857142856,238.5 553.5000000000001,265.75 679,260 C 804.4999999999999,254.25 945.5714285714284,215.5 1075,200 C 1204.4285714285716,184.5 1322.2142857142858,192.25 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#cae7e8ff" className="transition-all duration-300 ease-in-out delay-150" />
          <path d="M 0,400 C 0,400 0,200 0,200 C 87.64285714285714,172.17857142857144 175.28571428571428,144.35714285714286 305,148 C 434.7142857142857,151.64285714285714 606.5,186.74999999999997 743,207 C 879.5,227.25000000000003 980.7142857142858,232.64285714285714 1091,229 C 1201.2857142857142,225.35714285714286 1320.642857142857,212.67857142857144 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fillOpacity='0.5' fill="#cae7e8ff" className="transition-all duration-300 ease-in-out delay-150" />
        </g>
      </svg>
      {/* <svg
        width="100%"
        viewBox="0 0 2400 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsSerif="http://www.serif.com/"
      >
        <g>
          <g transform="matrix(-1.66667,-2.04108e-16,2.39768e-16,-1.95785,2400,626.513)">
            <path fill="#cae7e8" fillOpacity="0.5" d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,117.3C560,96,640,64,720,74.7C800,85,880,139,960,144C1040,149,1120,107,1200,106.7C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </g>
          <g transform="matrix(-1.66667,-2.04108e-16,1.53081e-16,-1.25,2400,400)">
            <path fill="#cae7e8" fillOpacity="1" d="M0,128L40,122.7C80,117,160,107,240,128C320,149,400,203,480,234.7C560,267,640,277,720,245.3C800,213,880,139,960,90.7C1040,43,1120,21,1200,58.7C1280,96,1360,192,1400,240L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </g>
        </g>
      </svg> */}
      <Flex
        align="center"
        justify={{
          base: 'center',
        }}
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        wrap="no-wrap"
        minH="auto"
        mb={{ base: 8, md: 50 }}
      >
        <Stack spacing={4} w={{ base: '60%' }} align="center">
          <Heading
            as="h1"
            size="xl"
            color="mint.700"
            opacity="1"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {data.homepageText.paragraphTwoTitle}
          </Heading>
          <Text color="mint.500" fontSize="2xl">
            {data.homepageText.paragraphTwoBody}
          </Text>
        </Stack>
      </Flex>
      <Box align="center">
        <Map />
      </Box>
    </Layout>
  );
};

export default Homepage;
