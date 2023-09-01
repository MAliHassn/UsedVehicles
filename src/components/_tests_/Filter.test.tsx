import React from 'react';
import {render} from '@testing-library/react-native';
import Filter from '../Filter';
import {Data} from '../../constants/Data';

describe('Filter Component', () => {
  it('renders correctly', () => {
    const mockOnPress = jest.fn();
    const mockOnPressNode = jest.fn();

    const {getAllByText} = render(
      <Filter
        data={Data.treeData}
        onPress={mockOnPress}
        onPressNode={mockOnPressNode}
      />,
    );
    const treeTitleElements = getAllByText(/Cars|Trucks/i);
    expect(treeTitleElements.length).toBe(2); // Assuming you have 2 tree titles
  });
});
