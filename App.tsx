/* eslint-disable camelcase */
import React from 'react';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
// navigators
import AuthFlow from './navigation/AuthFlow';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthFlow />
    </NavigationContainer>
  );
}
