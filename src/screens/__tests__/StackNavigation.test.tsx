import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { render,fireEvent } from '@testing-library/react-native';
import {TreeFilter} from '../TreeFilter';
import {VehiclesList} from '../VehiclesList';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('VehiclesList Navigation', () => {
  const Stack = createNativeStackNavigator();

  it('navigates to TreeFilter when filter button is pressed', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="VehiclesList">
          <Stack.Screen name="VehiclesList" component={VehiclesList} />
          <Stack.Screen name="TreeFilter" component={TreeFilter} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Find and press the filter button by testID
    fireEvent.press(getByTestId('filter'));
    expect(getByTestId('tree-filter')).toBeTruthy();
  });
});

