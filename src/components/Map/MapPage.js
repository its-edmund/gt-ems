import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  FormLabel,
  Input,
  FormControl,
  Select,
  Box,
  Button,
  FormErrorMessage,
  Heading,
  Flex,
  Stack,
  Center,
  Text
} from '@chakra-ui/react';
import axios from 'axios';
import { ApolloClient, gql, useQuery, InMemoryCache } from '@apollo/client';
import ReactDatePicker from 'react-datepicker';

import Map from './Map';
import Layout from '../Layout';
import Navbar from '../Navbar/Navbar';
import DatePicker from './DatePicker/DatePicker';

const mongoClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
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

const MapPage = () => {
  const [locations, setLocations] = useState([]);
  const { data, errors, loading } = useQuery(WAYPOINTS, {
    client: mongoClient
  });

  useEffect(() => {
    const fetchData = async () => {
      const locations = await axios.get('https://m.gatech.edu/api/gtplaces/buildings/');
      let locationsNoDupes = [];
      locations.data.forEach((location) => {
        if (!locationsNoDupes.some(e => e.name === location.name)) {
          locationsNoDupes.push({
            name: location.name,
            latitude: location.latitude,
            longitude: location.longitude
          });
        }
      });
      locationsNoDupes.sort((a, b) => (a.name > b.name) ? 1 : -1);
      setLocations(locationsNoDupes);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Center mt={100}>
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Box h='400px' p={5} borderWidth='1px' borderRadius={10} shadow='md' mr='10px'>
            <Formik
              initialValues={{
                nature: ''
              }}
              validate={values => {
                const errors = {};
                if (!values.nature) {
                  errors.nature = 'The nature of the incidence is required';
                }
                console.log(values);
                if (values.location === 'Select a Location') {
                  errors.location = 'The location of the incidence is required';
                }
                console.log(errors);
                return errors;
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {({ values, errors, isSubmitting, handleChange }) => (
                <Form>
                  <Heading mb={5}>Student Incidence Reporting</Heading>
                  <FormLabel htmlFor="nature" mt={4}>Nature of Incident</FormLabel>
                  <Input value={values.nature} name="nature" onChange={handleChange} placeholder="Nature of Incident" />
                  {errors.nature ? (
                    <Box backgroundColor='#ffa6a6' borderRadius={5} padding={3} mt={2}>
                      <Text color="#000">
                        {errors.nature}
                      </Text>
                    </Box>
                  ) : null}
                  <FormLabel htmlFor="name" mt={4}>Incident Location</FormLabel>
                  <Select value={values.location} name='location' onChange={handleChange}>
                    <option key="null">Select a Location</option>
                    {locations.map((location) => {
                      return <option key={location.name}>{location.name}</option>;
                    })}
                  </Select>
                  {errors.location ? (
                    <Box backgroundColor='#ffa6a6' borderRadius={5} padding={3} mt={2}>
                      <Text color="#000">
                        {errors.location}
                      </Text>
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
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          {loading ? <></> :
            <Map w={500} ml='10px' data={data} />
          }
        </Flex>
      </Center>
    </>
  );
};

export default MapPage;