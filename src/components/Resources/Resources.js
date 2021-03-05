import React from 'react';
import ReactPlayer from 'react-player';
import { gql, useQuery } from '@apollo/client';
import { Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react';

import Layout from '../Layout';

const QUICK_LINKS_QUERY = gql`
  query Quick_Link_Collection {
    quickLinkCollection {
      items {
        title
        description
        logo {
          url
          description
        }
        url
      }
    }
  }
`;

const Resources = () => {
  const { loading, data } = useQuery(QUICK_LINKS_QUERY);

  return (
    <Layout>
      <Flex direction='column' my={10} align='center'>
        <Heading as='h1' color='mint.700' fontSize='4xl' fontWeight='bold' mb={30}>Resources</Heading>
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </Flex>
      <Flex direction='column' align='center'>
        <Heading as="h2" mx='auto' my={30} color='mint.700' fontSize='3xl'>Quick Links</Heading>
        <Stack spacing={20}>
          {loading ? (
            <Box mx='auto'><Text>Loading Data...
            </Text></Box>
          ) : (
            data.quickLinkCollection.items.map((quickLink, i) => (
              <Flex direction='row' key={i}>
                <Flex direction='column' mr={20}>
                  <Heading as='h3' size='lg' color='mint.700'>
                    <a
                      style={{ textDecoration: 'none' }}
                      href={quickLink.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {quickLink.title}
                    </a>
                  </Heading>
                  <Text color='mint.500'>{quickLink.description}</Text>
                </Flex>
                <Image
                  w='300px'
                  alt={quickLink.logo.description}
                  src={quickLink.logo.url}
                />
              </Flex>
            ))
          )}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Resources;
