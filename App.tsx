import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_500Medium
} from '@expo-google-fonts/jost'
import { Welcome } from './src/pages/welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold
  })

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }



  return (
    <Routes />
  );
}

