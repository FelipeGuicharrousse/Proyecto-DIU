import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'

import { IoCash, IoMedkit, IoNewspaper } from 'react-icons/io5'


const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}


function AboutUs() {
  return (
    <Flex
      bg={useColorModeValue('gray.50', 'gray.800')}
      width="100%" // Establece el ancho al 100%
    >
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Acerca de Nosotros
            </Text>
            <Heading>Dirección de Relaciones Estudiantiles</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Las relaciones estudiantiles son vínculos sociales, amistades y colaboraciones 
            académicas que enriquecen la vida universitaria. En nuestra universidad, fomentamos 
            conexiones que brindan apoyo, enriquecen el desarrollo personal y promueven el éxito 
            académico. ¡Explora cómo nuestras relaciones estudiantiles pueden mejorar tu 
            experiencia en el campus!
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={IoCash} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Becas USM'}
              />
              <Feature
                icon={<Icon as={IoMedkit} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Servicio de Salud'}
              />
              <Feature
                icon={<Icon as={IoNewspaper} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Noticias'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://noticias.usm.cl/wp-content//uploads/2020/12/imagen-central.jpeg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}

export default AboutUs;
