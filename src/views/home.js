import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

function Home() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Becas
        </Text>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Beca de Alimentación</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Consiste en el acceso gratuito a los servicios de alimentación institucionales 
              (casinos) al que puede postular el estudiantado perteneciente a los primeros 
              deciles socioeconómicos, y que no cuenten con Beca de Alimentación de Educación
              Superior JUNAEB (BAES). Este beneficio puede incluir almuerzo y/o cena, lo que
              se determina en función de los cupos y presupuestos institucionales.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Subsidio BAES</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Subsidio otorgado a estudiantes que poseen la Beca de Alimentación de Educación 
              Superior de la JUNAEB (BAES), consistente en una subvención que cubre la diferencia 
              entre el precio del menú único del casino USM y el valor establecido por JUNAEB. 
              En otras palabras, al pagar el almuerzo en la USM con la tarjeta BAES, sólo se 
              cobrará el precio establecido por JUNAEB, puesto que la diferencia entre el precio 
              real del almuerzo y lo que se cancela, lo subvenciona la USM.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Beca para Estudiantes Padres y Madres</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Consiste en una subvención monetaria orientada a favorecer a estudiantes de 
              los primeros deciles socioeconómicos con hijos(as) en edad preescolar, 
              ayudándoles a desarrollar con tranquilidad su vida universitaria.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}

export default Home;
