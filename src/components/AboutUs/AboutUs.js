import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Flex, Heading, Stack, Text, Link, Button, Image } from '@chakra-ui/react';
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
      <Stack
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
        mb={{ base: 8, md: 10 }}
        mx='auto'
        w={{base: '80%', md: '60%'}}
        spacing={10}
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}
          fontWeight="bold"
          color="mint.700"
          textAlign="center"
          paddingBottom={[5, 5, 5]}
        >
          {'About Us'}
        </Heading>
        {data.aboutUsTextCollection.items.map((section) => (
          <Flex direction='column' spacing={4} align="center" key={section}>
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
          </Flex>
        ))}
      </Stack>
      <Flex
        align="center"
        justify={{
          base: 'space-between',
          md: 'space-around',
          xl: 'space-between',
        }}
        direction='column'
        px={{ base: 0, md: 10 }}
        my={20}
        wrap="no-wrap"
        minH="auto"
      >
        <Stack
          spacing={20}
          w={{ base: '80%', md: '100%' }}
          direction='row'
        >
          {data.personCollection.items.map((person) => (
            <Flex align='center' direction='column' w={{ base: '20%', sm: '50%', md: '100%' }} mb={{ base: 12, md: 0 }} key={person}>
              <Image src={person.profilePicture.url} mb={5} borderRadius="full" w='100px' />
              <Heading fontSize='2xl' >
                {person.position}
              </Heading>
              <Text color="gray.500" fontSize="lg">
                {person.name}
              </Text>
            </Flex>
          ))}
        </Stack>  
        <Link mt={10} textDecoration="none" href="/gettinginvolved">
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
      </Flex>
    </Layout>
  );
};

export default AboutUs;
