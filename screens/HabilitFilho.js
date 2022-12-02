import React, { useState } from 'react';
import { Box,  Input, Icon, Flex, ScrollView,  Center, Link, Button, Text, TouchableOpacity } from 'native-base'

import {  EvilIcons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import { UploadFile } from '../config/fileUpload'

export default function HabilitFilho() {

  const [blobFile, setBlobFile] = useState(null);
  const [fileName, setFileName] = useState('No Files')
  const [isChoosed, setIsChoosed] = useState(false)
  const [uploadCompleted, isUploadCompleted] = useState(false)
  const [uploadStart, setUploadStart] = useState(false);


    const pickCamera = async () => {

        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          
        });
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
  

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({})
       
        if (result != null) {
          const r = await fetch(result.uri);
         
          const b = await r.blob();
          setFileName(result.name)
          setBlobFile(b)
          setIsChoosed(true)
        }
    
      };

    const clearFiles = () => {
        setFileName('No Files')
        setBlobFile(null)
        setIsChoosed(false)
      }

    const uploadFile = () => {
        if (blobFile) {
          setUploadStart(true)
          UploadFile(blobFile, fileName, isUploadCompleted)
          clearFiles()
    
        }
      };

    return (
        <ScrollView width="100%" backgroundColor='#eee'>
            <Center>
                <Box w='100%' padding='3' mt={40}>
                    <Box>
                        <Flex direction='column'>
                            <Text fontSize='13' my='3'>Nome completo do Titular:</Text>
                            <Input shadow='2' bg="white" w="100%" />

                            <Text fontSize='13' my='3'>CPF do Titular:</Text>
                            <Input shadow='2' bg="white" w="100%" />

                            <Text fontSize='13' my='3'>Nome Completo Do Dependente:</Text>
                            <Input shadow='2' bg="white" w="100%" />

                            <Text fontSize='13' my='3'>CPF do Dependente:</Text>
                            <Input shadow='2' bg="white" w="100%" />

                            <Text fontSize='13' my='3'>E-mail para Contato:</Text>
                            <Input shadow='2' bg="white" w="100%" />
                        </Flex>
                    </Box>

                    <Button w='80%' backgroundColor='gray.200' shadow='5' borderRadius='35' mt='4' ml='7'  alignItems='center' onPress={pickCamera}>
                        <Flex direction="row">
                            <Icon as={EvilIcons} name="camera" color='black' size="5xl" mr='4' />
                            <Text mt='11' mr='8' color='gray.500' bold fontSize='14'>Escanear Documentações</Text>
                        </Flex>
                    </Button>

                    <Text fontSize='14' alignSelf='center' my='2'> ou</Text>
                   
                    <Link alignSelf='center' onPress={() => pickDocument()}>
                        Selecionar Arquivos
                    </Link>

                    <TouchableOpacity
                      onPress={() => uploadFile()}> <Text>Enviar Documentos</Text>
                    </TouchableOpacity>

                </Box>

            </Center>

        </ScrollView>
    );
}