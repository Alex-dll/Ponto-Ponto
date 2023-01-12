import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { ThemeProvider } from 'styled-components';

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';

import useAppearance from './src/hooks/useAppearance';
import Text from './src/components/Text';
import Button from './src/components/Button';

export default function App() {
  const { theme } = useAppearance();
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,

    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" translucent />
      <SafeAreaView style={styles.container}>
        <Button
          color="primary"
          onPress={() => Alert.alert('Entrada', 'Nova entrada registrada')}
        >
          Ponto Ponto
        </Button>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
