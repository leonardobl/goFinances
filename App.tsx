import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { DashBoard } from './src/screens/dashboard';
import { AnimatedLottieLoading } from './src/AnimatedLottieLoading';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins"

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold
  })
  
  if(!fontsLoaded) {
    return <AnimatedLottieLoading />
  }
  
  return (
    <>
      <StatusBar style='light' />
      <ThemeProvider theme={theme}>
        <DashBoard />
      </ThemeProvider>
    </>
    );
  }
  
