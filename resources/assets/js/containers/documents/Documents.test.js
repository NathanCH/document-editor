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
        setView: (spies.setView = jest.fn()),
      }, spies.dispatch = jest.fn()),
    };
    component = renderer.create(<Documents {...props} />);
  });

  test('it calls `props.request()` on lifecycle componentWillMount()', () => {
    expect(spies.request.mock.calls.length).toBe(1);
  });

});