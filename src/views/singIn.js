import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Box,
  Container,
} from '@chakra-ui/react';

import SplitScreen from '../components/formWithImage.js';

function SignIn() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      width={'full'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box width="100%">
        <SplitScreen/>
      </Box>
    </Flex>
  );
}

export default SignIn;
