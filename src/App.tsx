import 'react-native-reanimated'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Stacks from './routes/Stacks';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
