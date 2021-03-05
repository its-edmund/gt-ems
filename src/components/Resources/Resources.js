import React from 'react';
import ReactPlayer from 'react-player';
import { gql, useQuery } from '@apollo/client';
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import styles from './Resources.module.css';
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
        <Heading as='h1'>Resources</Heading>
        <div className={styles.video}>
          <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>
      </Flex>
      <Flex direction='column' align='center'>
        <Heading as="h2" mx='auto'>Quick Links</Heading>
        <Stack spacing={20} className={styles.quick_links_container}>
          {loading ? (
            <div className={styles.no_roles}>Loading Data...</div>
          ) : (
            data.quickLinkCollection.items.map((quickLink, i) => (
              <Flex direction='row' key={i}>
                <Flex direction='column'>
                  <Heading as='h3'>
                    <a
                      style={{ textDecoration: 'none' }}
                      href={quickLink.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {quickLink.title}
                    </a>
                  </Heading>
                  <Text>{quickLink.description}</Text>
                </Flex>
                <Image
                  w='300px'
                  alt={quickLink.logo.description}
                  clssName={styles.emergency}
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
