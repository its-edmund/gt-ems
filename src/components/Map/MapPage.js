import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import {
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Heading,
  Flex,
  Center,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  // Tooltip,
  Checkbox,
  Stack
} from '@chakra-ui/react';
import axios from 'axios';
import { ApolloClient, gql, InMemoryCache, useMutation, useLazyQuery } from '@apollo/client';
import badWords from 'bad-words';
// import ReactDatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Map from './Map';
import Navbar from '../Navbar/Navbar';
// import DatePicker from './DatePicker/DatePicker';

const mongoClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  onError: (e) => { console.log(e); },
  cache: new InMemoryCache(),
});

const WAYPOINTS = gql`
  query {
    getWaypoints {
      id
      long
      lat
      nature
    }
  }
`;

const CREATE_WAYPOINT = gql`
  mutation ($long: Float!, $lat: Float!, $nature: String!) {
    createWaypoint(long: $long, lat: $lat, nature: $nature) {
      id
      long
      lat
      nature
    }
  }
`;

const MapPage = () => {
  const [locations, setLocations] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [createWaypoint, { loading: mutationLoading }] = useMutation(CREATE_WAYPOINT, {
    client: mongoClient,
  });

  const [getWaypoints, { data: waypointsData }] = useLazyQuery(WAYPOINTS, {
    client: mongoClient,
    fetchPolicy: 'cache-and-network',
    onCompleted() {
      setWaypoints(waypointsData.getWaypoints);
    }
  });

  useEffect(() => {
    onOpen();
    const fetchData = async () => {
      const locations = await axios.get('https://m.gatech.edu/api/gtplaces/buildings/');
      let locationsNoDupes = [];
      locations.data.forEach(location => {
        if (!locationsNoDupes.some(e => e.name === location.name)) {
          locationsNoDupes.push({
            name: location.name,
            latitude: location.latitude,
            longitude: location.longitude,
          });
        }
      });
      locationsNoDupes.sort((a, b) => (a.name > b.name ? 1 : -1));
      setLocations(locationsNoDupes);
    };

    fetchData();
    getWaypoints();
  }, []);

  // useEffect(() => {
  //   console.log('hllow?');
  //   if (waypointsData) {
  //     console.log(waypointsData);
  //     setWaypoints(waypointsData.getWaypoints);
  //   }
  // }, [waypointsData, waypointsLoading, called]);

  return (
    <>
      <Navbar />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent pb={5}>
          <ModalHeader>Disclaimer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This project is still a work in progress. It is meant to be used to improve the safety and awareness on campus. Please do not abuse our reporting system. If you see an inappropriate entry, contact <Link color='mint.500' fontWeight='extrabold' href='mailto:georgiatechems@gmail.com'>georgiatechems@gmail.com</Link> immediately. Thank you for your help!</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Center mt={50}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box h="500px" w={500} p={5} borderWidth="1px" borderRadius={10} shadow="md" mr={{ base: '0px', md: '10px' }}>
            <Formik
              initialValues={{
                nature: '',
                location: 'Select a Location',
                agreement: false
              }}
              validateOnChange={false}
              validate={values => {
                let filter = new badWords();
                const errors = {};
                if (!values.nature) {
                  errors.nature = 'The nature of the incidence is required';
                }
                if (filter.isProfane(values.nature)) {
                  errors.nature = 'Please don\'t use profane language.';
                }
                if (values.location === 'Select a Location') {
                  errors.location = 'The location of the incidence is required';
                }
                if (!values.agreement) {
                  errors.agreement = 'Please check the agreement before submitting your entry';
                }
                return errors;
              }}
              onSubmit={values => {
                let longitude;
                let latitude;
                locations.some((location) => {
                  if (values.location === location.name) {
                    longitude = location.longitude;
                    latitude = location.latitude;
                    return true;
                  }
                });
                createWaypoint({ variables: { long: longitude, lat: latitude, nature: values.nature }});
                getWaypoints();
              }}
            >
              {({ values, errors, handleChange }) => (
                <Form>
                  <Stack direction='column' spacing={2}>
                    <Heading>Student Incidence Reporting</Heading>
                    <FormLabel htmlFor="nature">
                    Nature of Incident {/* <Tooltip label="Please specify the type of medical issue that is being reported" placement='top' closeOnClick={false} closeDelay={500}><FontAwesomeIcon icon={faInfoCircle} size="sm" /></Tooltip> */}
                    </FormLabel>
                    <Input
                      value={values.nature}
                      name="nature"
                      onChange={handleChange}
                      placeholder="Nature of Incident"
                    />
                    {errors.nature ? (
                      <Box backgroundColor="#ffa6a6" borderRadius={5} padding={2} mt={2}>
                        <Text color="#000">{errors.nature}</Text>
                      </Box>
                    ) : null}
                    <FormLabel htmlFor="name">
                    Incident Location {/* <Tooltip label="Hey, I'm here!" aria-label="A tooltip"><FontAwesomeIcon icon={faInfoCircle} size="sm" /></Tooltip> */}
                    </FormLabel>
                    <Select value={values.location} name="location" onChange={handleChange}>
                      <option key="null">Select a Location</option>
                      {locations.map(location => {
                        return <option key={location.name}>{location.name}</option>;
                      })}
                    </Select>
                    {errors.location ? (
                      <Box backgroundColor="#ffa6a6" borderRadius={5} padding={2} mt={2}>
                        <Text color="#000">{errors.location}</Text>
                      </Box>
                    ) : null}
                    <Checkbox value={values.agreement} name='agreement' onChange={handleChange}><Text overflowWrap='break-word'>I understand that my entry will be public and it is appropriate for it to be so.</Text></Checkbox>
                    {errors.agreement ? (
                      <Box backgroundColor="#ffa6a6" borderRadius={5} padding={2} mt={2}>
                        <Text color="#000">{errors.agreement}</Text>
                      </Box>
                    ) : null}
                    <Button
                      my={4}
                      backgroundColor="mint.700"
                      color="white"
                      borderRadius="8px"
                      _hover={{ bg: 'mint.300' }}
                      isLoading={mutationLoading}
                      type="submit"
                    >
                    Submit
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
            <Link as='i' color='#adadad' href='mailto:georgiatechems@gmail.com'>Report abuse</Link>
          </Box>
          <Map w={500} ml={{ base: '0px', md: '10px' }} data={waypoints} />
        </Flex>
      </Center>
    </>
  );
};

export default MapPage;
