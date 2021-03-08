import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Formik, Form, Field } from 'formik';
import {
  Center,
  Flex,
  FormLabel,
  Input,
  FormControl,
  FormHelperText,
  Select,
  Box,
  Button,
  FormErrorMessage,
  Heading
} from '@chakra-ui/react';
import axios from 'axios';

const Map = () => {
  const [viewPort, setViewPort] = useState({
    latitude: 33.7765,
    longitude: -84.3963,
    zoom: 14
  });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('https://m.gatech.edu/api/gtplaces/buildings/');
      setLocations(data.data.map((location) => {
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
    <Flex direction='column' align='center'>
      <Heading as='h1' color='mint.700' fontSize='4xl' fontWeight='bold' mb={30}>Medical Incidence Map</Heading>
      <Box mb={20} w='80%' p={5} borderWidth='1px' borderRadius={10} shadow='md'>
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
              <Field name="type" >
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor="name">Incident Type</FormLabel>
                    <Input {...field} id="name" placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="location" >
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.location && form.touched.location}>
                    <FormLabel htmlFor="name">Incident Location</FormLabel>
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
        {/* <Form id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </Form> */}
      </Box>
      <ReactMapGL
        {...viewPort}
        mapStyle="mapbox://styles/mapbox/outdoors-v9"
        showZoom
        showCompass
        width="80%"
        height="300px"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewPort(viewport)}
      />
    </Flex>
  );
};

export default Map;
