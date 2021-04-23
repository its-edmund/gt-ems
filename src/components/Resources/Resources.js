import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Flex, Heading, Image, Stack, Text, Box, Center, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
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
        <Heading
          my={10}
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}
          fontWeight="bold"
          color="mint.700"
          textAlign="center"
          paddingBottom={[5, 5, 5]}
        >
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
          EMT Training Timeline
        </Heading>
        <Stack direction={{base: 'column', md: 'row'}} spacing='0' boxShadow='100px'>
          <Box bg="mint.500" height="330px" width={{base: '80vw', md: '15vw'}} borderRadius={{base: '10px 10px 0 0', md: '10px 0 0 10px'}}>
            <Box height='50px' mt='10px' bgColor='white' textAlign='center'>
            </Box>
            <Box w='80%' mx='auto' my='10px'>
              <Heading color='white' as='h3' fontSize='20px'>Graduate High School</Heading>
              <Text fontSize='15px' color='white'>You need a high school diploma or GED, along with a passport or driver’s license
              </Text>
            </Box>
          </Box>
          <Box bg="mint.500" height="330px" width={{base: '80vw', md: '15vw'}}>
            <Center height='50px' mt='10px' bgColor='white' textAlign='center'>
              <Heading as='h3' color='mint.700' fontSize='20px' lineHeight='50px'>1-2 hours</Heading>
            </Center>
            <Box w='80%' mx='auto' my='10px'>
              <Heading color='white' as='h3' fontSize='20px'>Get CPR Certification</Heading>
              <Text fontSize='15px' color='white'>Can do online/in person for cheap/free</Text>
            </Box>
          </Box>
          <Box bg="mint.300" height="330px"width={{base: '80vw', md: '15vw'}}>
            <Center height='50px' mt='10px' bgColor='white' textAlign='center'>
              <Heading as='h3' color='mint.700' fontSize='20px' lineHeight='50px'>~120 hours</Heading>
            </Center>
            <Box w='80%' mx='auto' my='10px'>
              <Heading color='mint.700' as='h3' fontSize='20px'>Apply to & Complete EMT Course</Heading>
              <Text fontSize='15px' color='mint.700'>Will need to complete background checks, drug screening, and more dependant on specific course requirements.</Text>
            </Box>
          </Box>
          <Box bg="mint.300" height="330px" width={{base: '80vw', md: '15vw'}}>
            <Center height='50px' mt='10px' bgColor='white' textAlign='center'>
              <Heading as='h3' color='mint.700' fontSize='20px'>Sign up 3-4 weeks early</Heading>
            </Center>
            <Box w='80%' mx='auto' my='10px'>
              <Heading color='mint.700' as='h3' fontSize='20px'>Pass Cognitive NREMT + Psychomotor Exam</Heading>
              <Text fontSize='15px' color='mint.700'>You must be 18+ years old to take the exams (some EMT Courses may also require this). Once you pass you will receive registration and paperwork from NREMT</Text>
            </Box>
          </Box>
          <Box bg="mint.300" height="330px" width={{base: '80vw', md: '15vw'}} borderRadius={{base: '0 0 10px 10px', md: '0 10px 10px 0'}}>
            <Center height='50px' mt='10px' bgColor='white' textAlign='center'>
            </Center>
            <Box w='80%' mx='auto' my='10px'>
              <Heading color='mint.700' as='h3' fontSize='20px'>Apply for a GA State License</Heading>
              <Text fontSize='15px' color='mint.700'>Use <Link href='https://dph.georgia.gov/ems-personnel-licensure' isExternal color='mint.500'>GA DPH website<ExternalLinkIcon mx="2px" /></Link> to apply for GA license to practice in GA</Text>
            </Box>
          </Box>
        </Stack>
        {/* <Box w='100px' h='100px'>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box w='100%' h='100%' backgroundColor='mint.300'>
              <Heading>Hello</Heading>
            </Box>
            <Box w='100%' h='100%' backgroundColor='mint.300'></Box>
            <Box w='100%' h='100%'></Box>
            <Box w='100%' h='100%'></Box>
            <Box w='100%' h='100%'></Box>
          </Grid>
        </Box> */}
      </Flex>
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
