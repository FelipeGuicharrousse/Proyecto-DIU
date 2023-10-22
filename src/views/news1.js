import React from 'react';
import {
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function NewsExample(){
    return (
        <div>
            <div align='left'>
                <Link 
                padding='10px'
                to='/news'
                style={{ textDecoration: 'underline' }}
                >Volver a noticias</Link>
            </div>
            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Estudiante USM participa de campeonato internacional Goalball en Brasil</Heading>
        <Text as="p" fontSize="lg" >
        Entusiasmada por este nuevo desafío, Melany contó que tiene grandes expectativas en esta versión 2023 del torneo Goalball a desarrollarse en territorio brasileño. “Esta será mi primera participación en un equipo de Brasil. Ellos me invitaron a competir en la liga de Brasil, en la división serie B, que es una de las mejores a nivel mundial. Brasil es campeón internacional de este deporte”.


        </Text>
        <Text as="p" fontSize="lg">
        “Para mi es un honor poder aprender, conocer y enfrentarme a este tipo de competencias. Actualmente soy la primera deportista chilena de Goalball en ser invitada para participar en un equipo de allá. Nadie de nuestro país ha participado”, agregó la estudiante.
        </Text>
        <Text as="p" fontSize="lg">
            El Goalball es una disciplina creada exclusivamente para personas con discapacidad visual. Este deporte paralímpico se basa principalmente en el sentido auditivo para detectar la trayectoria de la pelota en juego (que lleva cascabeles en su interior), y en el que participan dos equipos de tres jugadores cada uno, durante 2 tiempos de 12 minutos cronometrados.
        </Text>
      </VStack>
        </div>

    )
}
