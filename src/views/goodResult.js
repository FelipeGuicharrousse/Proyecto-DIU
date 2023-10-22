import React from 'react';
import {
  Flex,
  useColorModeValue,
  Text,
  Box,
  Heading, 
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'


function GoodResult() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      width={'full'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box width="100%" textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
            ¡Estás habilitado a postular a una beca!
        </Heading>
        <Text color={'gray.500'}>
            Puedes postular a las becas usando nuestros medios de comunicación.
        </Text>
      </Box>
    </Flex>
  );
}

export default GoodResult;
