import React from 'react';
import renderer from 'react-test-renderer';

import Breadcrumb from './Breadcrumb.js';

test('it renders current page when a string is passed', () => {
  const component = renderer
    .create(<Breadcrumb current="Test" />)
    .toJSON();

  expect(component).toMatchSnapshot();
});

test('it does not render current page when prop is null', () => {
  const component = renderer
    .create(<Breadcrumb />)
    .toJSON();

  expect(component).toMatchSnapshot();
});