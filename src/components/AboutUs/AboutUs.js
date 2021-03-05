import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Flex, Heading, Stack, Text, Link, Button, SimpleGrid, Box, Image } from '@chakra-ui/react';
import Layout from '../Layout';

const QUERY = gql`
  query AboutUsTexts {
    aboutUsTextCollection {
      items {
        title
        paragraph
      }
    }
    personCollection {
      items {
        profilePicture {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        name
        position
        biography
      }
    }
  }
`;

const AboutUs = () => {
  const { data, errors, loading } = useQuery(QUERY);

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
          base: 'column',
          md: 'column',
        }}
        wrap="no-wrap"
        minH="auto"
        px={{ base: 8, md: 40 }}
        mb={{ base: 8, md: 50 }}
        height="container.sm"
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}
          fontWeight="bold"
          color="mint.700"
          textAlign="center"
          paddingBottom={50}
        >
          {'About Us'}
        </Heading>
        {data.aboutUsTextCollection.items.map((section) => (
          <Stack spacing={4} w={{ base: '60%' }} align="center" key={section} paddingTop={5}>
            <Heading
              as="h1"
              size="lg"
              color="black"
              opacity="0.8"
              fontWeight="bold"
              lineHeight={1.5}
              textAlign={['center', 'center', 'left', 'left']}
            >
              {section.title}
            </Heading>
            <Text color="gray.500" fontSize="2xl">
              {section.paragraph}
            </Text>
          </Stack>
        ))}
      </Flex>
      <Flex
        align="center"
        justify={{
          base: 'space-between',
          md: 'space-around',
          xl: 'space-between',
        }}
        direction={{
          base: 'column',
          md: 'column',
        }}
        px={{ base: 0, md: 10 }}
      >
        <SimpleGrid 
          columns={3}
          spacing={12}
          w={{ base: '100%', md: '60%'}}
          paddingTop={[60, 80, 100]}
          justify={{
            base: 'center',
            md: 'space-around',
            xl: 'space-between',
          }}
        >
          {data.personCollection.items.map((person) => (
            <Box w={{ base: '100%', sm: '100%', md: '100%' }} mb={{ base: 12, md: 0 }} key={person}>
              <Image src={person.profilePicture.url} borderRadius="full" paddingLeft={3}/>
              <Heading paddingLeft={10}>
                {person.position}
              </Heading>
              <Text color="gray.500" fontSize="2xl" paddingLeft={10}>
                {person.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Stack
        spacing={4}
        w={{ base: '200%', md: '100%' }}
        align='center'
        paddingTop={20}
      >
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
    </Layout>
  );
};

export default AboutUs;
