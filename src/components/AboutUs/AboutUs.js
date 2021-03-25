import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Flex, Heading, Stack, Text, Link, Button, Image } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Layout from '../Layout';
import { useDisclosure } from '@chakra-ui/react';

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [biography, setBiography] = useState('hi');

  function handleClick(value) {
    setBiography(value);
    {onOpen();}
  }

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
        align='center'
        justify='center'
        direction='column'
        mx='auto'
        my={20}
        wrap="no-wrap"
        minH="auto"
      >
        <Stack
          ml={{base: 0, md: 30}}
          spacing={100}
          direction={{base: 'column', md: 'row'}}
        >
          {data.personCollection.items.map((person) => (
            <Flex align='center' direction='column' mb={{ base: 12, md: 0 }} key={person} onClick={() => handleClick(person.biography)} cursor='pointer'>
              <Image src={person.profilePicture.url} mb={5} borderRadius="full" w={{base: '200px', md: '100px'}} />
              <Heading fontSize='2xl' onClick={() => handleClick(person.biography)}>
                {person.position}
              </Heading>
              <Text color="gray.500" fontSize="lg" onClick={() => handleClick(person.biography)} cursor='pointer'>
                {person.name}
              </Text>
            </Flex>
          ))}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Biography</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {biography}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
