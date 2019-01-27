import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

const mockItems = {
  1: {
    id: 1,
    title: 'Mocked document',
    created_at: '',
    updated_at: '',
  },
  2: {
    id: 2,
    title: 'Second mocked document',
    created_at: '',
    updated_at: '',
  },
};

describe('<List />', () => {
  test('it renders without props', () => {
    const component = renderer
      .create(<List />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders a <ListItem /> for each `props.items`', () => {
    const component = renderer
      .create(<List items={mockItems} />);

    let instance = component.root;

    const foundListItems = instance.findAll(
      el => el.type.name == 'ListItem'
    );

   expect(foundListItems).toHaveLength(2);
  });

  test('it renders className `.list-item` for each `props.items`', () => {
    const component = renderer
      .create(<List items={mockItems} />);

    let instance = component.root;

    const foundClassNames = instance.findAll(
      el => el.props.tag == 'div'
        && el.props.className == 'list-item'
    );

    expect(foundClassNames).toHaveLength(2);
  });

  test('it renders <Loader /> when `props.isFetching` is true', () => {
    const component = renderer
      .create(<List isFetching={true} />);

    let instance = component.root;

    const foundInstance = instance.findAll(
      el => el.type.name == 'Loader'
    );

    expect(foundInstance).toHaveLength(1);
  });

});