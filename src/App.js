import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';

const App = () => {
  return (
        <SafeAreaProvider>
          <StatusBar barStyle={'dark-content'} />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
  );
};

export default App;

