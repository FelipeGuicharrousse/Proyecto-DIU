import React from 'react';
import {
  Flex,
  useColorModeValue,
  Text,
  Box,
  Heading, 
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'

function BadResult() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      width={'full'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box textAlign="center" py={10} px={6}>
        <Box display="inline-block">
            <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={'red.500'}
            rounded={'50px'}
            w={'55px'}
            h={'55px'}
            textAlign="center">
            <CloseIcon boxSize={'20px'} color={'white'} />
            </Flex>
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
            Lamentablemente no puedes postular a una beca
        </Heading>
        <Text color={'gray.500'}>
            No estás habilitado para obtener una beca
        </Text>
        </Box>
    </Flex>
  );
}

export default BadResult;
