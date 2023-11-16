import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Grid,
  GridItem,

} from '@chakra-ui/react';

function StudentList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleOpenModal = (student) => {
    setSelectedStudent(student);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setIsOpen(false);
  };

  const students = [
    {   
        Nombre: 'Juan Perez', 
        Correo: 'juan.perez@usm.cl',
        Rol: '20125263-5', 
        Carrera: 'Ing. Civil Informatica',
        Ingreso: '2019',
        Solicitud: 'Postulación',
        Beca: 'Beca de Alimentacion'
    },
    {   
        Nombre: 'Maria Montez', 
        Correo: 'maria.montez@usm.cl',
        Rol: '20212263-2',
        Carrera: 'Ing. Civil Industrial',
        Ingreso: '2020',
        Solicitud: 'Renovación',
        Beca: 'Beca de Residencia'
    },
    { 
        Nombre: 'Pedro Torres',
        Correo: 'pedro.torres@usm.cl',
        Rol: '20246364-8',
        Carrera: 'Ing. Civil Fisica',
        Ingreso: '2022',
        Solicitud: 'Renovación',
        Beca: 'Beca para estudiantes Padres y Madres'
    },
    { 
        Nombre: 'Pedro Torres',
        Correo: 'pedro.torres@usm.cl',
        Rol: '20246364-8',
        Carrera: 'Ing. Civil Fisica',
        Ingreso: '2022',
        Solicitud: 'Renovación',
        Beca: 'Beca para estudiantes Padres y Madres'
    },
    { 
        Nombre: 'Pedro Torres',
        Correo: 'pedro.torres@usm.cl',
        Rol: '20246364-8',
        Carrera: 'Ing. Civil Fisica',
        Ingreso: '2022',
        Solicitud: 'Renovación',
        Beca: 'Beca para estudiantes Padres y Madres'
    },
    { 
        Nombre: 'Pedro Torres',
        Correo: 'pedro.torres@usm.cl',
        Rol: '20246364-8',
        Carrera: 'Ing. Civil Fisica',
        Ingreso: '2022',
        Solicitud: 'Renovación',
        Beca: 'Beca para estudiantes Padres y Madres'
    },
    { 
        Nombre: 'Pedro Torres',
        Correo: 'pedro.torres@usm.cl',
        Rol: '20246364-8',
        Carrera: 'Ing. Civil Fisica',
        Ingreso: '2022',
        Solicitud: 'Renovación',
        Beca: 'Beca para estudiantes Padres y Madres'
    },
    { 
        Nombre: 'Pedro Torres',
        Correo: 'pedro.torres@usm.cl',
        Rol: '20246364-8',
        Carrera: 'Ing. Civil Fisica',
        Ingreso: '2022',
        Solicitud: 'Renovación',
        Beca: 'Beca para estudiantes Padres y Madres'
    },
  ];

  return (
    <div>
      <Heading padding='30px' align='left'>
        Lista de estudiantes
      </Heading>
      <TableContainer padding={'30px'}>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>Alumno</Th>
              <Th>Tipo solicitud</Th>
              <Th>Beca</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => (
              <Tr key={index}>
                <Td>{student.Nombre}</Td>
                <Td>{student.Solicitud}</Td>
                <Td>{student.Beca}</Td>
                <Td>
                    <Button 
                        colorScheme='blue'
                        onClick={() => handleOpenModal(student)}>Ver detalles
                    </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size={'md'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalles del estudiante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedStudent && (
              <div>
                <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                {Object.keys(selectedStudent).map((key, index) => (
                  <React.Fragment key={index}>
                    <GridItem colSpan={1} fontWeight='bold' align='right'>
                      {key}:
                    </GridItem>
                    <GridItem colSpan={1}>{selectedStudent[key]}</GridItem>
                  </React.Fragment>
                ))}
              </Grid>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default StudentList;
