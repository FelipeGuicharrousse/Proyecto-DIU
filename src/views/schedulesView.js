import React, { useState } from "react";
import {
  Flex,
  useColorModeValue,
  Text,
  Box,
  Heading,
  Button,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";

function ScheduleItem({ id, day, startTime, endTime, onDelete, onEdit }) {
  const [isEditing, setEditing] = useState(false);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, startTime, endTime);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
  };

  return (
    <Flex
      p={2}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      align="center"
      justify="space-between"
    >
      <Text minW="100px">{day}</Text>
      {isEditing ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <Input
            type="time"
            value={startTime}
            onChange={(e) => onEdit(id, e.target.value, endTime)}
          />
          <Text>-</Text>
          <Input
            type="time"
            value={endTime}
            onChange={(e) => onEdit(id, startTime, e.target.value)}
          />
        </Stack>
      ) : (
        <Text>
          {startTime} - {endTime}
        </Text>
      )}
      <Flex alignItems="center">
        {isEditing ? (
          <Button onClick={handleSaveClick} variant="ghost" color="green.500">
            <CheckIcon />
          </Button>
        ) : (
          <>
            <Button onClick={handleEditClick} variant="ghost" color="blue.500">
              <EditIcon />
            </Button>
            <Button onClick={handleDeleteClick} variant="ghost" color="red.500">
              <CloseIcon />
            </Button>
          </>
        )}
      </Flex>

      <Modal isOpen={isDeleteModalOpen} onClose={handleCancelDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar día</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ¿Estás seguro de que quieres eliminar el día {day} de la agenda?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleConfirmDelete}>
              Eliminar
            </Button>
            <Button variant="ghost" onClick={handleCancelDelete}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}


function SchedulesView() {
  const [schedules, setSchedules] = useState([
    { id: 1, day: "Lunes", startTime: "09:00", endTime: "17:00" },
    { id: 2, day: "Martes", startTime: "09:00", endTime: "17:00" },
    { id: 3, day: "Miercoles", startTime: "09:00", endTime: "17:00" },
    { id: 4, day: "Jueves", startTime: "09:00", endTime: "17:00" },
    { id: 5, day: "Viernes", startTime: "09:00", endTime: "17:00" },
  ]);

  const handleDeleteSchedule = (id) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  const handleEditSchedule = (id, newStartTime, newEndTime) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === id
        ? { ...schedule, startTime: newStartTime, endTime: newEndTime }
        : schedule
    );
    setSchedules(updatedSchedules);
  };

  return (
    <Box maxW="container.lg" mx="auto" mt={4} textAlign="center">
      <Heading mb={2}>Horario de Atención</Heading>
      <Text textAlign="center">
        En esta plataforma, tienes la capacidad de gestionar tus horarios para las 
        consultas psicológicas. Puedes modificar los horarios para cada día según 
        tus preferencias y, si decides no trabajar en un día específico, tienes la 
        opción de eliminarlo de la agenda de la semana
      </Text>
      {schedules.map((schedule) => (
        <ScheduleItem
          key={schedule.id}
          id={schedule.id}
          day={schedule.day}
          startTime={schedule.startTime}
          endTime={schedule.endTime}
          onDelete={() => handleDeleteSchedule(schedule.id)}
          onEdit={handleEditSchedule}
        />
      ))}
    </Box>
  );
}

export default SchedulesView;
