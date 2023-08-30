import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {Splash} from '../src/screens/Splash';
import {TreeFilter} from '../src/screens/TreeFilter';
import {VehiclesList} from '../src/screens/VehiclesList';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('page contains 3 images', async () => {
    const component = (
      <NavigationContainer>
        <Splash />
      </NavigationContainer>
    );

    render(component);
    expect(render).toMatchSnapshot();
  })

  test('page contains list of vehicles data ', async () => {
    const component = (
      <NavigationContainer>
        <VehiclesList />
      </NavigationContainer>
    );

    render(component);
    expect(render).toMatchSnapshot();
  })

  test('page contains tree filter ', async () => {
    const component = (
      <NavigationContainer>
        <TreeFilter />
      </NavigationContainer>
    );

    render(component);
    expect(render).toMatchSnapshot();
  })
});