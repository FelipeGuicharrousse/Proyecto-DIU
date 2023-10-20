import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  
  export default function SplitScreen() {
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const role = event.target.role.value;
      navigate(`/becas/${role}`);
    };
  
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Ingresa Tu Cuenta Estudiante USM</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="role">
                <FormLabel>Rol (Formato: XXXXXXXXX-X)</FormLabel>
                <Input type="text" name="role" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Correo Institucional</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Recuérdame</Checkbox>
                  <Text color={'blue.500'}>¿Olvidaste la Contraseña?</Text>
                </Stack>
                <Button type="submit" colorScheme={'blue'} variant={'solid'}>
                  Ingresar
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://noticias.usm.cl/wp-content//uploads/2020/12/imagen-central.jpeg'
            }
          />
        </Flex>
      </Stack>
    );
  }
  