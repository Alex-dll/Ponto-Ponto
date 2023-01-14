import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { ThemeProvider } from 'styled-components';

import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';

import useAppearance from './src/hooks/useAppearance';
import Button from './src/components/Button';
import DigitalClock from './src/components/DigitalClock';

export default function App() {
  const { theme } = useAppearance();

  const StoreContext = createContext({});

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,

    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreContext.Provider value={StoreContext}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" translucent />
        <SafeAreaView style={styles.container}>
          <DigitalClock />
          <Button
            color="primary"
            onPress={() => Alert.alert('Entrada', 'Nova entrada registrada')}
          >
            Ponto Ponto
          </Button>
        </SafeAreaView>
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
