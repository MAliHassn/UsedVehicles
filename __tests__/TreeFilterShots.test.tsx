import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import {TreeFilter} from '../src/screens/TreeFilter';
import { waitFor } from '@testing-library/react-native';

it('renders correctly', async() => {
  const component = (
    <NavigationContainer>
      <TreeFilter />
    </NavigationContainer>
  );
  const rendered = renderer.create(component).toJSON();
  await waitFor(() => expect(rendered).toMatchSnapshot());
});