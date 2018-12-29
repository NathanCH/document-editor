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

  test('it renders dropdown when `.grid-item-toggle` is clicked', () => {
    const component = renderer
      .create(<GridItem item={mockItem} />);

    const gridItemToggle = el =>
      el.props.tag == 'button' && el.props.className == 'grid-item-toggle';

    const isVisible = el =>
      el.props.component == 'div' && el.props.className.includes('show');

    let instance = component.root,
        isDropdownVisible = instance.findAll(isVisible),
        button = instance.find(gridItemToggle);

    expect(isDropdownVisible).toHaveLength(0);

    button.props.onClick();

    isDropdownVisible = instance.findAll(isVisible);

    expect(isDropdownVisible).toBeTruthy();
  });

});