import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverBgColor = useColorModeValue('blue.200', 'blue.400');

  return (
    <>
      <Box bg={useColorModeValue('blue.700', 'blue.900')} px={4} top="0" width="100%">

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBgColor,
                }}
                href={'/'}
              >
                Home
              </Box>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBgColor,
                }}
                href={'/about-us'}
              >
                Quienes somos
              </Box>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBgColor,
                }}
                href={'/news'}
              >
                Noticias
              </Box>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBgColor,
                }}
                href={'/health'}
              >
                Salud
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <HStack as={'nav'} spacing={4}>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBgColor,
                }}
                href={'/'}
              >
                Home
              </Box>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBgColor,
                }}
                href={'/form'}
              >
                Form
              </Box>
            </HStack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
