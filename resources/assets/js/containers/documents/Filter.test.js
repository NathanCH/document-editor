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
        setView: (spies.setView = jest.fn()),
      }, spies.dispatch = jest.fn()),
    };
    component = renderer.create(<Filter {...props} />);
  });

  test('it calls `props.setView()` when <Button /> is clicked', () => {
    expect(spies.setView.mock.calls.length).toBe(0);

    let instance = component.root;

    const gridButton = instance.find(
      el => el.props.tag == 'button'
        && el.props.value == 'grid'
    );

    gridButton.props.onClick({
      target: { value: 'grid' },
    });

    expect(spies.setView.mock.calls.length).toBe(1);
  });

});