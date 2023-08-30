import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

it('renders correctly', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});