import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

function Home() {
  const [isHovered, setHovered] = useState(false);
  return (
    <Flex
      minH={'100vh'}
      align={'flex-start'} // Alinear al inicio verticalmente
      justify={'center'}  // Centrar horizontalmente
      bg={useColorModeValue('gray.50', 'gray.800')}
      pt={10}             // Margen superior para dar espacio desde el encabezado
    >
      <Container>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Atención en Salud
        </Text>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Equipo Servicio Médico</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              El servicio de Atención en Salud, conformado por médicos, kinesiólogos, 
              psicólogos, odontólogos, y parámedicos, tienen como objetivo ofrecer una atención cercana
              y de alta calidad, enfocada en mejorar la calidad de vida de nuestros estudiantes.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Equipo Servicio Dental</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              El servicio de Atención en Salud, conformado por médicos, kinesiólogos, 
              psicólogos, odontólogos, y parámedicos, tienen como objetivo ofrecer una atención cercana
              y de alta calidad, enfocada en mejorar la calidad de vida de nuestros estudiantes.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Atención Primaria</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              El Servicio Médico Sansanito, cuenta con dos médicos generales, especializadas en 
              medicina preventiva. Además,se desarrolla el área de anticoncepción, consultas y derivaciones ginecológicas.
              Se atiende a estudiantes que llegan por consulta espontánea, además de estudiantes que
              tienen preocupación por su salud y que quieran realizar prevención.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Atención Psicológica</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              Orientada a acompañar el proceso de la comunidad estudiantil durante su formación académica.
              Incluyen: 
              <UnorderedList spacing={2}>
                  <ListItem>Psicoeducación.</ListItem>
                  <ListItem>Acompañamiento en proceso de duelo</ListItem>
                  <ListItem>Orientación vocacional</ListItem>
                  <ListItem>Psicoterapia breve</ListItem>
                  <ListItem>Derivaciones necesarias para casos que lo ameriten (psiquiatra, neurólogo (a), entre otros).</ListItem>
              </UnorderedList>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Atención Kinesiológica</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              El Servicio Médico Sansanito, cuenta con un programa de kinesiología de gran calidad y 
              constante mejoría, orientado a la prevención y tratamiento integral de patologías del 
              aparato locomotor. Esta área cuenta con la mayoría de los insumos requeridos para una rehabilitación en 
              condiciones óptimas (ultrasonido, onda corta, tens, laserterapia, gimnasio terapéutico, entre otras) 
              y está disponible para la atención exclusiva de estudiantes de la USM.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Atención de Primeros Auxilios</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              Atención de primera demanda. Contamos con dos TENS que están presentes de 8:30 a 20:30 horas, 
              en horario continuado, atentos frente a cualquier emergencia.
              Nuestra atención de primeros auxilios incluye:
              <UnorderedList spacing={2}>
                  <ListItem>Control de glicemia por hemoglucotest.</ListItem>
                  <ListItem>Control de signos vitales</ListItem>
                  <ListItem>Curaciones</ListItem>
                  <ListItem>Entrega de medicamentos contra receta médica.</ListItem>
              </UnorderedList>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Seguro de Accidentes</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              Protege a estudiantes regulares de Establecimientos Fiscales, Municipales, Particulares, Subvencionados,
              Particulares No Subvencionados, del Nivel de Transición de la Educación Parvularia, de Enseñanza Básica,
              Media, Normal, entre otros, de  accidentes que sufran estudiantes con ocasión de sus estudios o en la realización
              de su Práctica Educacional o en el trayecto directo, de ida o regreso entre su casa y el Establecimiento Educacional 
              o el lugar donde realice su Práctica Profesional.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Normativa Certificados Médicos</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              Para estudiantes que requieran justificar una inasistencia por causa médica deberán presentar certificado médico 
              con un plazo de hasta 48 horas de emitido el certificado, a través de la plataforma SIGA.
              No se aceptarán certificados médicos emitidos por pediatras.
              Los certificados médicos de duración prolongada deben ser emitidos por médicos especialistas al igual que las eximiciones.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Vídeos</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              Consiste en una subvención monetaria orientada a favorecer a estudiantes de 
              los primeros deciles socioeconómicos con hijos(as) en edad preescolar, 
              ayudándoles a desarrollar con tranquilidad su vida universitaria.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Tratamientos Dentales</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4} alignItems="start">
              <UnorderedList spacing={2}>
                <ListItem>Examen de salud gratuito</ListItem>
                <ListItem>Urgencias</ListItem>
                <ListItem>Obturaciones de resina (tapaduras estéticas)</ListItem>
                <ListItem>Endodoncia de dientes anteriores y premolares (tratamiento conducto)</ListItem>
                <ListItem>Extracción simple y compleja</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Tips de Cuidados Dentales</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black">
              Es importante cuidar la boca de las enfermedades que pueden desarrollarse como: Caries,
              Enfermedades Periodontales y de Transmisión Sexual. Para prevenirlas debemos:
              <UnorderedList spacing={2}>
                  <ListItem>Usar diariamente cepillo y seda dental.</ListItem>
                  <ListItem>Cambiar tu cepillo cada dos meses.</ListItem>
                  <ListItem>Evitar el consumo de dulces, galletas, calugas y bebidas entre comidas.</ListItem>
                  <ListItem>Evitar el cigarrillo.</ListItem>
                  <ListItem>Asistir periódicamente al dentista.</ListItem>
              </UnorderedList>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              bg="blue.600"  
              color={isHovered ? "black" : "white"}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <Text fontSize="md">Procedimiento Covid-19</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black  ">
              La Dirección de Relaciones Estudiantiles, en su permanente compromiso y atención a las necesidades del 
              estudiantado de la Universidad Técnica Federico Santa María, informa que el equipo de profesionales de 
              la salud y área social continúan entregando orientación y apoyo en caso de que tú o algún integrante de tu 
              familia se encuentren afectados por el virus Covid-19.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}

export default Home;


