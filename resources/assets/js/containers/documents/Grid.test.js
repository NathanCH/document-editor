import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Grid from './Grid';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

const mockItems = [
  {
    id: 1,
    title: 'Mocked document',
    created_at: '',
    updated_at: '',
  },
  {
    id: 2,
    title: 'Second mocked document',
    created_at: '',
    updated_at: '',
  },
];

describe('<Grid />', () => {
  test('it renders without props', () => {
    const component = renderer
      .create(<Grid />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders a <GridItem /> for each `props.items`', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Grid items={mockItems} />
          </MemoryRouter>
        </Provider>
      );

    let instance = component.root;

    const foundGridItems = instance.findAll(
      el => el.type.name == 'GridItem'
    );

   expect(foundGridItems).toHaveLength(2);
  });

  test('it renders className `.grid-item` for each `props.items`', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Grid items={mockItems} />
          </MemoryRouter>
        </Provider>
      );

    let instance = component.root;

    const foundClassNames = instance.findAll(
      el => el.props.tag == 'div'
        && el.props.className == 'grid-item'
    );

    expect(foundClassNames).toHaveLength(2);
  });

  test('it renders <Loader /> when `props.isFetching` is true', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Grid isFetching={true} />
          </MemoryRouter>
        </Provider>
      );

    let instance = component.root;

    const foundInstance = instance.findAll(
      el => el.type.name == 'Loader'
    );

    expect(foundInstance).toHaveLength(1);
  });

});