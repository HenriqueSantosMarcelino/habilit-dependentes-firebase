import React from 'react';
import HabilitFilho from './screens/HabilitFilho'
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { THEME } from './styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Inconsolata_400Regular, Inconsolata_500Medium, Inconsolata_600SemiBold, } from '@expo-google-fonts/inconsolata';


export default function App() {
  /*const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Roboto_900Black, Inter_400Regular, Inter_700Bold, Inconsolata_400Regular, Inconsolata_500Medium, Inconsolata_600SemiBold, })

  if (!fontsLoaded) {
    return null;
  }*/

  return (
    <NativeBaseProvider theme={THEME}>
        <SafeAreaProvider>
            <HabilitFilho />
        </SafeAreaProvider>
    </NativeBaseProvider>
  );
}