import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout';
import ReactPlayer from 'react-player';

//<ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

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
    usefulVideoCollection {
      items {
        videoUrl
        explanation
        title
      }
    }
  }
`;

const Resources = () => {
  const { loading, data } = useQuery(QUICK_LINKS_QUERY);

  return (
    <Layout>
      <Flex direction="column" my={10} align="center">
        <Heading as="h1" color="mint.700" fontSize="4xl" fontWeight="bold" mb={30}>
          Resources
        </Heading>
      </Flex>
      <Carousel style={{ backgroundColor: '#A8DADC' }}>
        {loading ? (
          <Box mx="auto">
            <Text>Loading Data...</Text>
          </Box>
        ) : (
          data.usefulVideoCollection.items.map((videoLink, i) => (
            <Carousel.Item key={i}>
              <Box my={10} align="center">
                <Heading
                  className="video_link_title"
                  textAlign="center"
                  fontSize={23}
                  textDecoration="underline"
                  color="blackAlpha.800"
                >
                  {videoLink.title}
                </Heading>

                <Text
                  className="video_link_explanation"
                  fontSize={18}
                  textAlign="center"
                  paddingBottom={5}
                  marginLeft="24%"
                  marginRight="24%"
                >
                  {videoLink.explanation}
                </Text>
                <Box w="100%">
                  <ReactPlayer url={videoLink.videoUrl} paddingBottom={5} />
                </Box>
              </Box>
            </Carousel.Item>
          ))
        )}
      </Carousel>
      <Flex direction="column" align="center" paddingTop={10}>
        <Heading as="h2" mx="auto" my={30} color="mint.700" fontSize="3xl">
          Quick Links
        </Heading>
        <Stack width={{ base: '80%', md: '60%' }} spacing={20}>
          {loading ? (
            <Box mx="auto">
              <Text>Loading Data...</Text>
            </Box>
          ) : (
            data.quickLinkCollection.items.map((quickLink, i) => (
              <Flex align={{ base: 'center' }} direction={{ base: 'column', md: 'row' }} key={i}>
                <Flex direction="column" mr={20}>
                  <Heading as="h3" size="lg" color="mint.700">
                    <a
                      style={{ textDecoration: 'none' }}
                      href={quickLink.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {quickLink.title}
                    </a>
                  </Heading>
                  <Text color="mint.500">{quickLink.description}</Text>
                </Flex>
                <Image
                  mt={{ base: 30, md: 0 }}
                  maxWidth={{ base: '80%', md: '30%' }}
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
