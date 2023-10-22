'use client'


import React from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'



export default function News() {
  const cardBgColor = useColorModeValue('white', 'gray.900')
  const newsTitleColor = useColorModeValue('gray.700', 'white')
  const boxButtonBgColor = useColorModeValue('gray.700', 'white')
  return (
    <div>
      <Heading padding='10px' align='left'>Noticias</Heading>
      <div align='center'>
        <Wrap align={'justify'} justify={'center'} padding={'10px'}>
          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news1.jpg'}
                  fill
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'18px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Estudiante USM participa de campeonato internacional Goalball en Brasil
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                overflow={'hidden'}
                >
                Melany Olave, estudiante de Ingeniería Comercial de Campus Casa Central Valparaíso,
                 participará de campeonato internacional de Goalball en la ciudad de São Paulo, Brasil, 
                 entre el 24 y 28 de octubre.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Jorge Rubio, Periodista. Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}> Fecha de publicación: 19/10/2023</Text>
                </Stack>
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news2.jpg'}
                  fill
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'18px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Sansanos y sansanas líderes de la sede Viña del Mar son capacitados en 
                  primeros auxilios psicológicos

                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                overflow={'hidden'}
                >
                Actividad dirigida a tutores pares del programa PACE y ayudantes del CIAC, e impulsada 
                por el Departamento de Bienestar Estudiantil Sede Viña del Mar junto a DATA-E (Dirección 
                de Acompañamiento a la Trayectoria Académica Estudiantil) y se enmarca en la campaña local 
                #LaSaludMentalImporta. 
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Paulina Arancibia, Periodista. DGC Sede Viña del Mar.</Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news3.jpg'}
                  fill
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'18px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Proyecto busca fortalecer modelo de salud mental 
                  institucional con enfoque inclusivo
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                Esta iniciativa tiene una duración de dos años y está orientada a estudiantes 
                de todos los campus y sedes. 
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Comunicaciones Internas. Dirección General de Comunicaciones.</Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news4.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'16.5px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Sociedad de Debates realiza talleres intensivos sobre estrategias para 
                  hablar en público en Sedes Concepción y Viña del Mar
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                Esta actividad se efectúa en el marco del compromiso con el desarrollo de 
                habilidades comunicativas al llevar a cabo exitosos talleres en las Sedes 
                Concepción y Viña del Mar. Estos eventos impulsan la formación de estudiantes
                 en un esfuerzo constante por fortalecer sus habilidades comunicativas.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles.</Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news7.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news6.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news7.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news8.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news4.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news1.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              minW={'300px'}
              maxH={'600px'}
              minH={'600px'}

              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={'/news/news2.jpg'}
                  fill
                  minH={'100%'}
                />
              </Box>
              <Stack>
                <Heading
                  color={newsTitleColor}
                  fontSize={'17px'}
                  fontFamily={'body'}
                  minH={'95px'}
                  maxH={'95px'}
                  overflow={'hidden'}
                  >
                  Encuentro Interregional de Debate Parlamentario Británico Unipersonal se realiza 
                  con éxito en Sede Concepción
                </Heading>
                <Text 
                color={'gray.500'} 
                align={'justify'} 
                maxH={'140px'}
                minH={'140px'}
                overflow={'hidden'}
                >
                El evento reunió a cerca de un centenar de entusiastas participantes de 
                diversas instituciones educativas, desde escolares hasta universitarios, 
                en un formato de debate al estilo parlamentario británico y con más de 18 
                debates realizados.
                </Text>
                <Box
                  color={'white'}
                  bg={boxButtonBgColor}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  
                  href={'/news/example'}
                >
                  Ver Noticia
                </Box>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Equipo Sociedad de Debates, Dirección de Relaciones Estudiantiles. </Text>
                  <Text color={'gray.500'}>Fecha de publicación: 10/10/2023</Text>
                </Stack>                
              </Stack>
            </Box>
          </WrapItem>
        </Wrap>
      </div>
    </div>
    
    
  )
}
