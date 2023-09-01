import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TabsSwitcher from '../TabsSwitcher';
import {images} from '../../constants/Images';

describe('TabsSwitcher Component', () => {
  const mockCallBackSecTabSwitch = jest.fn();

  let mainFilters = [
    {id: 0, typeId: 0, title: 'All', value: 'all', image: images.all},
    {
      id: 1,
      typeId: 0,
      title: 'Featured',
      value: 'featured',
      image: images.badge,
    },
    {
      id: 2,
      typeId: 0,
      title: 'Urgent sale',
      value: 'urgent_sale',
      image: images.flash,
    },
    {
      id: 3,
      typeId: 0,
      title: 'Hot deals',
      value: 'hot_deals',
      image: images.hot_deal,
    },
    {
      id: 4,
      typeId: 0,
      title: 'Negotiatable',
      value: 'negotiatable',
      image: images.chat,
    },
    {
      id: 5,
      typeId: 0,
      title: 'Favorite',
      value: 'favorite',
      image: images.heart_fill,
    },
  ];

  it('renders correctly with provided tab items', () => {
    const {getByText} = render(
      <TabsSwitcher
        data={mainFilters}
        callBackSecTabSwitch={mockCallBackSecTabSwitch}
      />,
    );

    expect(getByText('Negotiatable')).toBeTruthy();
  });

  it('calls callBackSecTabSwitch when tab is pressed', () => {
    const {getByText} = render(
      <TabsSwitcher
        data={mainFilters}
        callBackSecTabSwitch={mockCallBackSecTabSwitch}
      />,
    );

    fireEvent.press(getByText('Featured'));
    expect(mockCallBackSecTabSwitch).toHaveBeenCalledTimes(1);
  });
});
