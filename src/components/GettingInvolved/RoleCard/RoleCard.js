import React from 'react';
import { Button, Box, Heading, Text, Stack } from '@chakra-ui/react';

const RoleCard = props => {
  return (
    <Stack backgroundColor='mint.300' borderRadius={5} boxShadow='10px' padding={5} h={350} w={250} spacing={5}>
      <Heading fontSize={24}>{props.position}</Heading>
      <Text>{props.pos_desc}</Text>
      <Heading fontSize={18}>Requirements</Heading>
      <Text>{props.requirements}</Text>
      <Button 
        bottom={0}
        backgroundColor="mint.700"
        color="white"
        borderRadius="8px"
        py="4"
        px="4"
        lineHeight="1"
        size="lg"
        _hover={{ bg: 'mint.500' }}
      >
        <a
          target="_blank"
          rel="noreferrer"
          styles={{ textDecoration: 'none' }}
          href={props.button_url}
        >
              Apply
        </a>
      </Button>
    </Stack>
  );
};

export default RoleCard;