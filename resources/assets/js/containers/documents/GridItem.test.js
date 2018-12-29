import React from 'react';
import renderer from 'react-test-renderer';
import GridItem from './GridItem';

const mockItem = {
  id: 1,
  title: 'Mocked document',
  created_at: '',
  updated_at: '',
};

describe('<GridItem />', () => {
  test('it renders a <Card /> as `props.item`', () => {
    const component = renderer
      .create(<GridItem item={mockItem} />);

    let instance = component.root;

    const foundCard = instance.find(
      el => el.type.name == 'Card'
    );

    expect(foundCard).toBeTruthy();
  });
});