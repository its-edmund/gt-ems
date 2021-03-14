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
  Center
} from '@chakra-ui/react';
import axios from 'axios';
import { ApolloClient, gql, useQuery, InMemoryCache } from '@apollo/client';

import Map from './Map';
import Layout from '../Layout';
import Navbar from '../Navbar/Navbar';

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
      setLocations(locations.data.map((location) => {
        return {
          name: location.name,
          latitude: location.latitude,
          longitude: location.longitude
        };
      }));
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
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Heading mb={5}>Student Incidence Reporting</Heading>
                  <Field name="type">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor="name">Nature of Incident</FormLabel>
                        <Input {...field} id="name" placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="location">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.location && form.touched.location}>
                        <FormLabel htmlFor="name" mt={4}>Incident Location</FormLabel>
                        <Select>
                          {locations.map((location) => {
                            return <option key={location}>{location.name}</option>;
                          })}
                        </Select>
                        <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    backgroundColor="mint.700"
                    color="white"
                    borderRadius="8px"
                    _hover={{ bg: 'mint.300' }}
                    isLoading={props.isSubmitting}
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