import React from 'react';
import renderer from 'react-test-renderer';
import { bindActionCreators } from 'redux';
import Sort from './Sort';

describe('<Sort />', () => {
  let spies, props, component;

  beforeEach(() => {
    spies = {};
    props = {
      ...bindActionCreators({
        sortView: (spies.sortView = jest.fn()),
      }, spies.dispatch = jest.fn()),
    };
    component = renderer.create(<Sort {...props} />);
  });

  test('it calls `props.sortView()` when <Select /> is changed', () => {
    expect(spies.sortView.mock.calls.length).toBe(0);

    let instance = component.root;

    const sortSelect = instance.find(
      el => el.props.name == 'sort-view'
        && el.props.type == 'select'
    );

    sortSelect.props.onChange({
      target: { value: 'date_asc' },
    });

    expect(spies.sortView.mock.calls.length).toBe(1);
  });

});