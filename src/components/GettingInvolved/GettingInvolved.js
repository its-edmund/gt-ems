import React from 'react';
import { Box, Flex, Button, Stack, Heading, Text, Image } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import { Link as ScrollTo } from 'react-scroll';

import styles from './GettingInvolved.module.css';
import Layout from '../Layout';

import RoleCard from './RoleCard/RoleCard';

const QUERY = gql`
  query Initiatives {
    initiativeCollection {
      items {
        title
        slug
        summary
        article
        initiativeLogo {
          url
          description
        }
      }
    }
  }
`;

const GettingInvolved = () => {
  const { data, loading } = useQuery(QUERY);

  return (
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
        my='30vh'
      >
        <Stack
          spacing={4}
          mx='auto'
          align={['center', 'center', 'flex-start', 'center']}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }}
            fontWeight="bold"
            color="mint.700"
            textAlign={['center', 'center', 'left', 'left']}
          >
            Get Involved With The GT Community
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
            We&apos;re looking for passionate individuals with a interest in healthcare and helping our community together.
          </Heading>
          <ScrollTo textDecoration="none" to="roles" smooth>
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
              See our open roles
            </Button>
          </ScrollTo>
        </Stack>
      </Flex>
      <Box pt={100} id='roles' align='center'>
        <Heading as="h2" mx='auto' color='mint.700' fontSize='3xl'>Open Roles</Heading>
      </Box>
      <Flex align='center'>
        <Stack direction='row' spacing={4} mx='auto' my={20}>
          <RoleCard />
        </Stack>
      </Flex>
      <Flex direction='column' align='center'>
        <Heading as="h2" mx='auto' my={30} color='mint.700' fontSize='3xl'>Learn more about our initiatives ✅</Heading>
        <Stack width={{ base: '80%', md: '60%' }} space={20}>
          {loading ? (
            <div className={styles.no_roles}>Loading Data...</div>
          ) : (
            data.initiativeCollection.items.map((initiative, i) => (
              <Flex direction='row' key={i}>
                <Flex direction='column' mr={20}>
                  <Heading as='h3' size='lg' color='mint.700'>
                    <a
                      style={{ textDecoration: 'none' }}
                      href={initiative.slug}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {'Initiative ' + (i + 1) + ': ' + initiative.title}
                    </a>
                  </Heading>
                  <Text color='mint.500'>{initiative.summary}</Text>
                </Flex>
                <Image
                  mt={{base: 30, md: 0}}
                  maxWidth={{base: '80%', md: '30%'}}
                  alt={initiative.initiativeLogo ? initiative.initiativeLogo.description : ''}
                  src={initiative.initiativeLogo ? initiative.initiativeLogo.url : ''}
                />
              </Flex>
            ))
          )}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default GettingInvolved;
