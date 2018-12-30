import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

const mockItem = {
  id: 1,
  title: 'Mocked document',
  created_at: '',
  updated_at: '',
};

describe('<ListItem />', () => {
  test('it renders a <Card /> as `props.item`', () => {
    const component = renderer
      .create(<ListItem item={mockItem} />);

    let instance = component.root;

    const foundCard = instance.find(
      el => el.type.name == 'Card'
    );

    expect(foundCard).toBeTruthy();
  });

  test('it renders dropdown when `.list-item-toggle` is clicked', () => {
    const component = renderer
      .create(<ListItem item={mockItem} />);

    const listItemToggle = el =>
      el.props.tag == 'button' && el.props.className == 'list-item-toggle';

    const isVisible = el =>
      el.props.component == 'div' && el.props.className.includes('show');

    let instance = component.root,
        isDropdownVisible = instance.findAll(isVisible),
        button = instance.find(listItemToggle);

    expect(isDropdownVisible).toHaveLength(0);

    button.props.onClick();

    isDropdownVisible = instance.findAll(isVisible);

    expect(isDropdownVisible).toBeTruthy();
  });

});