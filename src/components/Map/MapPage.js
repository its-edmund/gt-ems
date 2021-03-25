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
} from '@chakra-ui/react';
import axios from 'axios';
import { ApolloClient, gql, InMemoryCache, useMutation, useLazyQuery } from '@apollo/client';
// import ReactDatePicker from 'react-datepicker';

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
      <Center mt={100}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box h="400px" p={5} borderWidth="1px" borderRadius={10} shadow="md" mr={{ base: '0px', md: '10px' }}>
            <Formik
              initialValues={{
                nature: '',
                location: 'Select a Location'
              }}
              validate={values => {
                const errors = {};
                if (!values.nature) {
                  errors.nature = 'The nature of the incidence is required';
                }
                if (values.location === 'Select a Location') {
                  errors.location = 'The location of the incidence is required';
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
                  <Heading mb={5}>Student Incidence Reporting</Heading>
                  <FormLabel htmlFor="nature" mt={4}>
                    Nature of Incident
                  </FormLabel>
                  <Input
                    value={values.nature}
                    name="nature"
                    onChange={handleChange}
                    placeholder="Nature of Incident"
                  />
                  {errors.nature ? (
                    <Box backgroundColor="#ffa6a6" borderRadius={5} padding={3} mt={2}>
                      <Text color="#000">{errors.nature}</Text>
                    </Box>
                  ) : null}
                  <FormLabel htmlFor="name" mt={4}>
                    Incident Location
                  </FormLabel>
                  <Select value={values.location} name="location" onChange={handleChange}>
                    <option key="null">Select a Location</option>
                    {locations.map(location => {
                      return <option key={location.name}>{location.name}</option>;
                    })}
                  </Select>
                  {errors.location ? (
                    <Box backgroundColor="#ffa6a6" borderRadius={5} padding={3} mt={2}>
                      <Text color="#000">{errors.location}</Text>
                    </Box>
                  ) : null}
                  {/* <Field name="date">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.location && form.touched.location}>
                        <FormLabel htmlFor="published-date">Published Date</FormLabel>
                        <DatePicker selectedDate={field} onChange={(d) => console.log(d)} />
                        <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field> */}
                  <Button
                    mt={4}
                    backgroundColor="mint.700"
                    color="white"
                    borderRadius="8px"
                    _hover={{ bg: 'mint.300' }}
                    isLoading={mutationLoading}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Map w={500} ml={{ base: '0px', md: '10px' }} data={waypoints} />
        </Flex>
      </Center>
    </>
  );
};

export default MapPage;
