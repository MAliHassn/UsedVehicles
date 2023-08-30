import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stacks from './routes/Stacks';

const App = () => {
  return (
        <SafeAreaProvider>
          <StatusBar barStyle={'dark-content'} />
          <NavigationContainer>
            <Stacks />
          </NavigationContainer>
        </SafeAreaProvider>
  );
};

export default App;

