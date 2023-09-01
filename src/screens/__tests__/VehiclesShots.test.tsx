import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import {VehiclesList} from '../VehiclesList';
import {waitFor} from '@testing-library/react-native';

it('renders correctly', async () => {
  const component = (
    <NavigationContainer>
      <VehiclesList />
    </NavigationContainer>
  );
  const rendered = renderer.create(component).toJSON();
  await waitFor(() => expect(rendered).toMatchSnapshot());
});
