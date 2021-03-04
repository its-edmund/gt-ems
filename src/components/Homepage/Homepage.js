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
            size="lg"
            color="black"
            opacity="0.8"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {data.homepageText.paragraphOneTitle}
          </Heading>
          <Text color="gray.500" fontSize="2xl">
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
          ml={10}
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
        mt={200}
        mb={{ base: 8, md: 50 }}
      >
        <Stack spacing={4} w={{ base: '60%' }} align="center">
          <Heading
            as="h1"
            size="lg"
            color="black"
            opacity="0.8"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {data.homepageText.paragraphTwoTitle}
          </Heading>
          <Text color="gray.500" fontSize="2xl">
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
