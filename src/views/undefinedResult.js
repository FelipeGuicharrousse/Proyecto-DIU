import React from 'react';
import {
  Flex,
  useColorModeValue,
  Text,
  Box,
  Heading, 
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons'

function UndefinedResult() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      width={'full'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box textAlign="center" py={10} px={6}>
        <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          No se ha podido determinar si puede obtener becas
        </Heading>
        <Text color={'gray.500'}>
          Para saber que se puede hacer en tu situacion, por favor apela en los canales
          de comunicacion de la universidad.
        </Text>
      </Box>
    </Flex>
  );
}

export default UndefinedResult;
