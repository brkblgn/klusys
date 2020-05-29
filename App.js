import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Providers from './src/navigation/Routes';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: '#f1c40f',
  },
};

export default function App() {;
  return (
    <PaperProvider theme={theme}>
    <Providers/>
    </PaperProvider>
  );
}
