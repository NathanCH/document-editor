import React from 'react';
import renderer from 'react-test-renderer';
import { bindActionCreators } from 'redux';
import Filter from './Filter';

describe('<Filter />', () => {
  let spies, props, component;

  beforeEach(() => {
    spies = {};
    props = {
      ...bindActionCreators({
        onFilter: (spies.onFilter = jest.fn()),
      }, spies.dispatch = jest.fn()),
    };
    component = renderer.create(<Filter {...props} />);
  });

  test('it calls `props.onFilter()` when <Button /> is clicked', () => {
    expect(spies.onFilter.mock.calls.length).toBe(0);

    let instance = component.root;

    const gridButton = instance.find(
      el => el.props.tag == 'button'
        && el.props.value == 'grid'
    );

    gridButton.props.onClick({
      currentTarget: { value: 'grid' },
    });

    expect(spies.onFilter.mock.calls.length).toBe(1);
  });

});