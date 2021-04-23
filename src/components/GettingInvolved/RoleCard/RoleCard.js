import React from 'react';
import { Button, Heading, Text, Stack, Box, SimpleGrid } from '@chakra-ui/react';

const RoleCard = props => {
  return (
    <Stack
      backgroundColor="mint.300"
      borderRadius={5}
      boxShadow="10px"
      padding={5}
      w="80vw"
      spacing={5}
    >
      <SimpleGrid columns={2}>
        <Box>
          <Heading fontSize={24}>{props.position}</Heading>
          <Text>{props.pos_desc}</Text>
        </Box>
        <Box>
          <Heading fontSize={18}>Requirements</Heading>
          <Text>{props.requirements}</Text>
          <Button
            bottom={0}
            backgroundColor="mint.700"
            color="white"
            borderRadius="8px"
            w="100%"
            mt="10px"
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
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default RoleCard;
