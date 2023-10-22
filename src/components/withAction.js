import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  HStack,
  Button,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverBgColor = useColorModeValue('blue.200', 'blue.400');

  return (
    <>
      <Box bg={useColorModeValue('blue.700', 'blue.900')} px={4} top="0" width="100%">
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxWidth="1200px"
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Link to="/health">
            <Box as="a"
              backgroundImage="logo192.png"
              backgroundSize="cover"
              backgroundPosition="center"
              width="100px"
              height="60px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
            </Box>
          </Link>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color='white'>
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
                Inicio
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
                href={'/publications'}
              >
                Publicaciones
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
          <Flex alignItems="center">
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'/sign-in'}
              _hover={{
                bg: 'pink.300',
              }}>
              ¿Puedes postular a becas?
            </Button>
          </Flex>
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
