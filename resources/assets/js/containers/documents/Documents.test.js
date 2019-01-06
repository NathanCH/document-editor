import React from 'react';
import renderer from 'react-test-renderer';
import { bindActionCreators } from 'redux';
import Documents from './Documents';

describe('<Documents />', () => {
  let spies, props, component;

  beforeEach(() => {
    spies = {};
    props = {
      ...bindActionCreators({
        request: (spies.request = jest.fn()),
        filterView: (spies.filterView = jest.fn()),
        sortView: (spies.sortView = jest.fn()),
      }, spies.dispatch = jest.fn()),
    };
    component = renderer.create(<Documents {...props} />);
  });

  test('it calls `props.request()` on lifecycle componentWillMount()', () => {
    expect(spies.request.mock.calls.length).toBe(1);
  });

  test('it renders <Grid /> when `props.view` is `grid`', () => {
    const component = renderer.create(
      <Documents view="grid" {...props} />
    );

    let instance = component.root;

    const foundGridComponent = instance.findAll(
      el => el.type.name == 'Grid'
    );

    expect(foundGridComponent).toHaveLength(1);
  });

  test('it renders <List /> when `props.view` is `list`', () => {
    const component = renderer.create(
      <Documents view="list" {...props} />
    );

    let instance = component.root;

    const foundListComponent = instance.findAll(
      el => el.type.name == 'List'
    );

    expect(foundListComponent).toHaveLength(1);
  });

});