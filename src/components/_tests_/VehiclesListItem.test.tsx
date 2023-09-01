import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import VehiclesListItem from '../VehiclesListItem';
import {Data} from '../../constants/Data';

describe('VehiclesListItem Component', () => {
  const mockCallBackFav = jest.fn();

  const itemVehicle = Data.vehicles[2];

  it('calls callBackFav when heart icon is pressed', () => {
    const {getByTestId} = render(
      <VehiclesListItem item={itemVehicle} callBackFav={mockCallBackFav} />,
    );

    fireEvent.press(getByTestId('heart-icon'));
    expect(mockCallBackFav).toHaveBeenCalledTimes(1);
  });
});
