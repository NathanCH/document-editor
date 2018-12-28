import React from 'react';
import renderer from 'react-test-renderer';
import { bindActionCreators } from 'redux';

import Grid from './Grid';

describe('<Grid />', () => {

  test('it renders without props', () => {
    const component = renderer
      .create(<Grid />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  // test('it renders a grid item for each `props.items`', () => {

  // });

});