import React from 'react';
import renderer from 'react-test-renderer';
import { bindActionCreators } from 'redux';
import Sort from './Sort';

describe('<Sort />', () => {
  let spies, props, component;

  beforeEach(() => {
    spies = {};
    props = {
      current: 'date_update',
      ...bindActionCreators({
        onSort: (spies.onSort = jest.fn()),
      }, spies.dispatch = jest.fn()),
    };
    component = renderer.create(<Sort {...props} />);
  });

  test('it sets a defaultValue based on `props.current` value', () => {
    let instance = component.root;

    expect(instance.props.current).toEqual(props.current);
  })

  test('it calls `props.sortView()` when <Select /> is changed', () => {
    expect(spies.onSort.mock.calls.length).toBe(0);

    let instance = component.root;

    const sortSelect = instance.find(
      el => el.props.name == 'sort-view'
        && el.props.type == 'select'
    );

    sortSelect.props.onChange({
      target: { value: 'date_asc' },
    });

    expect(spies.onSort.mock.calls.length).toBe(1);
  });

});