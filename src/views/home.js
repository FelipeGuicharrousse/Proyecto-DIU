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
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import CaptionCarousel from '../components/captionCarousel.js';

function Home() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      width={'full'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box width="100%">
        <CaptionCarousel />
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
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Beca de Residencia</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Consiste en un aporte monetario mensual destinado a cubrir parte de los gastos 
              de hospedaje o de traslado, cuyo monto varía de acuerdo a la modalidad de la 
              beca otorgada. Su asignación está sujeta a la evaluación de la situación 
              socioeconómica de cada estudiante y a los límites presupuestarios de la institución
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Beca de Matrícula</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Consiste en la exención de pago de un porcentaje del arancel básico de matrícula 
              anual, que se determina en función del decil al que pertenezca cada estudiante. 
              Esta beca se asigna automáticamente durante el segundo semestre a quienes cumplen 
              los requisitos de focalización social, proceso a cargo de la Dirección de Relaciones 
              Estudiantiles.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Beca de Mantención Federico Santa María</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Consiste en la entrega de un monto mensual en dinero, durante los meses de abril 
              a diciembre, destinado a apoyar los gastos asociados a la actividad estudiantil. 
              Para esta beca no se necesita postular, sino que se asigna de acuerdo a los 
              antecedentes académicos y socioeconómicos del estudiantado.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Fondo Solidario de Crédito Universitario USM</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Beneficio destinado a aquellos estudiantes calificados dentro de los 6 primeros 
              deciles de ingresos socioeconómicos y que reciben una ayuda estudiantil del 
              Ministerio de Educación por el 100% del arancel de referencia. En este caso, la 
              USM otorga un crédito por la diferencia entre dicho financiamiento y el arancel 
              real de la carrera.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
}

export default Home;
