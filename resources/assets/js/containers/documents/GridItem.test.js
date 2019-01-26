import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GridItem from './GridItem';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

const mockItem = {
  id: 1,
  title: 'Mocked document',
  created_at: '',
  updated_at: '',
};

describe('<GridItem />', () => {
  test('it renders a <Card /> as `props.item`', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <GridItem item={mockItem} />
          </MemoryRouter>
        </Provider>
      );

    let instance = component.root;

    const foundCard = instance.find(
      el => el.type.name == 'Card'
    );

    expect(foundCard).toBeTruthy();
  });

  test('it renders dropdown when `.grid-item-toggle` is clicked', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <GridItem item={mockItem} />
          </MemoryRouter>
        </Provider>
      );

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