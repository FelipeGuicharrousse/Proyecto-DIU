import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import imagen from '../images/imagen-central.jpeg'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
                Página principal
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Administración RREE
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Página donde podrás gestionar tus horarios de atención y revisar la información de los postulantes.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align={'center'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              as={Link} 
              to="/schedules"
              _hover={{
                bg: 'blue.500',
              }}>
              Administrar Horario
            </Button>
            <Button as={Link} to="/schedules" rounded={'full'}>Información de Postulantes</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            imagen
          }
        />
      </Flex>
    </Stack>
  )
}
