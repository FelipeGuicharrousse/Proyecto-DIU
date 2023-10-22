'use client'

import React, { useState } from 'react';

import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Wrap,
  WrapItem,
  
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  ModalCloseButton, 
} from '@chakra-ui/react'



export default function Publications() {
  

  const numButtons = 7; 

  const [isOpen, setIsOpen] = useState(Array(numButtons).fill(false));

  const handleOpenPDF = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = true;
    setIsOpen(updatedIsOpen);
  };

  const handleClosePDF = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = false;
    setIsOpen(updatedIsOpen);
  };

  const cardBgColor = useColorModeValue('white', 'gray.900')
  const cardTitleColor = useColorModeValue('gray.700', 'white')
  const buttonBgColor = 'gray.700'
  const descriptionTextColor = 'gray.600'
  
  
  return (
    <div>
      <Heading padding={'15px'} align='left' >Publicaciones</Heading>
      <div id='Decretos'>
        <Heading align="left" padding="30px" fontSize={'22pt'}>Decretos</Heading>
        <Wrap spacing='30px' align={'center'} justify={'center'}>
          <WrapItem>
            <Box
              maxW={'300px'}
              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              
              <Stack paddingBottom='10px'>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={cardTitleColor}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Decreto Rectoría N° 175/2023 
                </Heading>
                <Text color={descriptionTextColor}>
                Reglamento Institucional de Derechos, Deberes y Disciplina del Estudiantado
                </Text>
              </Stack>
              
              <Button
                color={'white'}
                bg={buttonBgColor}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => handleOpenPDF(0)}
              >
              Ver Documento
              </Button>
              <Modal isOpen={isOpen[0]} onClose={() => handleClosePDF(0)} >
                <ModalOverlay/>
                  <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                    <ModalCloseButton />
                    <ModalBody width={'100%'} height={'100%'}>
                      <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/175_2023_DECRETO.pdf"></iframe>
                    </ModalBody>
                  </ModalContent>
              </Modal>
              
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              
              <Stack paddingBottom='10px'>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={cardTitleColor}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Decreto Rectoría N° 355/2022  
                </Heading>
                <Text color={descriptionTextColor}>
                Política integral para la prevención, investigación y sanción de acoso sexual, 
                la violencia y la discriminación de género en el contexto de la ley N°21.369
                </Text>
              </Stack>
              <Button
                color={'white'}
                bg={buttonBgColor}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => handleOpenPDF(1)}
              >
              Ver Documento
              </Button>
              <Modal isOpen={isOpen[1]} onClose={() => handleClosePDF(1)} >
                <ModalOverlay/>
                  <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                    <ModalCloseButton />
                    <ModalBody width={'100%'} height={'100%'}>
                      <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/355_2022_DECRETO.pdf"></iframe>
                    </ModalBody>
                  </ModalContent>
              </Modal>
            </Box>
          </WrapItem>
          
          <WrapItem>
            <Box
              maxW={'300px'}
              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              
              <Stack paddingBottom='10px'>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={cardTitleColor}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Decreto Rectoría N° 405/2022 
                </Heading>
                <Text color={descriptionTextColor}>
                Reglamento de investigación y sanción del acoso sexual,
                la violencia y la discriminación de género
                </Text>
              </Stack>
              <Button
                color={'white'}
                bg={buttonBgColor}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => handleOpenPDF(2)}
              >
              Ver Documento
              </Button>
              <Modal isOpen={isOpen[2]} onClose={() => handleClosePDF(2)} >
                <ModalOverlay/>
                  <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                    <ModalCloseButton />
                    <ModalBody width={'100%'} height={'100%'}>
                      <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/405_2022_DECRETO.pdf"></iframe>
                    </ModalBody>
                  </ModalContent>
              </Modal>
            </Box>
          </WrapItem>
        </Wrap>
      </div>
      <div id='Memorias'>
        <Heading align="left" padding="30px" fontSize={'22pt'}>Memorias</Heading>
        
        <Wrap spacing='30px' align={'center'} justify={'center'}>
          
          
          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={cardBgColor}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={cardTitleColor}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2021
              </Heading>
              <Text color={descriptionTextColor}>
              
              </Text>
            </Stack>
            <Button
              color={'white'}
              bg={buttonBgColor}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={() => handleOpenPDF(3)}
            >
            Ver Documento
            </Button>
            <Modal isOpen={isOpen[3]} onClose={() => handleClosePDF(3)} >
              <ModalOverlay/>
                <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                  <ModalCloseButton />
                  <ModalBody width={'100%'} height={'100%'}>
                    <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/Memoria_USM_2021.pdf"></iframe>
                  </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
          </WrapItem>

          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={cardBgColor}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={cardTitleColor}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2020
              </Heading>
              <Text color={descriptionTextColor}>
              
              </Text>
            </Stack>
            <Button
              color={'white'}
              bg={buttonBgColor}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={() => handleOpenPDF(4)}
            >
            Ver Documento
            </Button>
            <Modal isOpen={isOpen[4]} onClose={() => handleClosePDF(4)} >
              <ModalOverlay/>
                <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                  <ModalCloseButton />
                  <ModalBody width={'100%'} height={'100%'}>
                    <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/Memoria_USM_2020.pdf"></iframe>
                  </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={'300px'}
              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={cardBgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              
              <Stack paddingBottom='10px'>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={cardTitleColor}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Memoria Institucional 2019
                </Heading>
                <Text color={descriptionTextColor}>
                
                </Text>
              </Stack>
              <Button
                color={'white'}
                bg={buttonBgColor}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => handleOpenPDF(5)}
              >
              Ver Documento
              </Button>
              <Modal isOpen={isOpen[5]} onClose={() => handleClosePDF(5)} >
                <ModalOverlay/>
                  <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                    <ModalCloseButton />
                    <ModalBody width={'100%'} height={'100%'}>
                      <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/Memoria_USM_2019.pdf"></iframe>
                    </ModalBody>
                  </ModalContent>
              </Modal>
            </Box>
          </WrapItem>

          <WrapItem>
          <Box
            maxW={'300px'}
            w={'full'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={cardBgColor}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            
            <Stack paddingBottom='10px'>
              <Heading
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={cardTitleColor}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Memoria Institucional 2018
              </Heading>
              <Text color={descriptionTextColor}>
              
              </Text>
            </Stack>
            <Button
                color={'white'}
                bg={buttonBgColor}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => handleOpenPDF(6)}
              >
              Ver Documento
            </Button>
            <Modal isOpen={isOpen[6]} onClose={() => handleClosePDF(6)} >
              <ModalOverlay/>
                <ModalContent style={{ width: 'auto%', maxWidth: '90%', height: '90%',minHeight:'200px', maxHeight: '90%' }}>
                  <ModalCloseButton />
                  <ModalBody width={'100%'} height={'100%'}>
                    <iframe title="PDF Viewer" width="95%" height="100%" src="/documents/Memoria_USM_2018.pdf"></iframe>
                  </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
          </WrapItem>

         
        </Wrap>
         
      </div>
    </div>   
  )
}
