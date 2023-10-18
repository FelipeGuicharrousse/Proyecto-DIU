'use client'


import { Link } from 'react-router-dom';

import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'






export default function blogPostWithImage() {
  return (
    <div>
      <div id='Recientes'>
        <Heading align="left" padding="15px">Recientes</Heading>
        <Wrap spacing='30px' align={'center'} justify={'center'}>
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Decreto Rectoría N° 175/2023 
              </Heading>
              <Text color={'gray.500'}>
              Reglamento Institucional de Derechos, Deberes y Disciplina del Estudiantado
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Decreto Rectoría N° 355/2022  
              </Heading>
              <Text color={'gray.500'}>
              Política integral para la prevención, investigación y sanción de acoso sexual, 
              la violencia y la discriminación de género en el contexto de la ley N°21.369
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>
          </Wrap>
      </div>
      <div id='Anteriores'>
        <Heading align="left" padding="15px">Publicaciones Anteriores</Heading>
        
        <Wrap spacing='30px' align={'center'} justify={'center'}>
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Decreto Rectoría N° 405/2022 
              </Heading>
              <Text color={'gray.500'}>
              Reglamento de investigación y sanción del acoso sexual,
              la violencia y la discriminación de género
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>
          
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2021
              </Heading>
              <Text color={'gray.500'}>
              
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>

          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2020
              </Heading>
              <Text color={'gray.500'}>
              
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>

          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2019
              </Heading>
              <Text color={'gray.500'}>
              
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2018
              </Heading>
              <Text color={'gray.500'}>
              
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2017
              </Heading>
              <Text color={'gray.500'}>
              
              </Text>
            </Stack>
            <Button
              px={8}
              color={'white'}
              rounded={'md'}
              bg='grey'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Link to='/about-us'>Ver Documento</Link>
            </Button>
          </Box>
          </WrapItem>
        </Wrap>
        
       
      </div>
    </div>
    
    
  )
}
