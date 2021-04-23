import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  Flex,
  SimpleGrid,
  Heading,
  Stack,
  Text,
  Link,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [biography, setBiography] = useState('');
  const [name, setName] = useState('');

  function handleClick(newName, newBiography) {
    setBiography(newBiography);
    setName(newName);
    {
      onOpen();
    }
  }

  return loading ? (
    <div></div>
  ) : (
    <Layout>
      <Heading
        my={10}
        as="h1"
        fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}
        fontWeight="bold"
        color="mint.700"
        textAlign="center"
        paddingBottom={[5, 5, 5]}
      >
        About Us
      </Heading>
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
        mx="auto"
        w={{ base: '80%', md: '60%' }}
        spacing={10}
      >
        {data.aboutUsTextCollection.items.map(section => (
          <Flex direction="column" spacing={4} align="center" key={section}>
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
        justify="center"
        direction="column"
        mx="auto"
        my={20}
        wrap="no-wrap"
        minH="auto"
      >
        <SimpleGrid columns={3} spacing={100}>
          {data.personCollection.items.map(person => (
            <Flex
              align="center"
              direction="column"
              mb={{ base: 12, md: 0 }}
              key={person}
              onClick={() => handleClick(person.name, person.biography)}
              cursor="pointer"
            >
              <Image
                src={person.profilePicture ? person.profilePicture.url : ''}
                mb={5}
                borderRadius="full"
                w={{ base: '200px', md: '100px' }}
              />
              <Heading fontSize="2xl">{person.position}</Heading>
              <Text color="gray.500" fontSize="lg" cursor="pointer">
                {person.name}
              </Text>
            </Flex>
          ))}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody mb={4}>{biography}</ModalBody>
            </ModalContent>
          </Modal>
        </SimpleGrid>
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
