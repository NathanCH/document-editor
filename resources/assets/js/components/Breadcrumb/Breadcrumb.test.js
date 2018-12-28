import React from 'react';
import renderer from 'react-test-renderer';

import Breadcrumb from './Breadcrumb';

describe('<BreadCrumb />', () => {

  test('it does not render current page when prop is null', () => {
    const component = renderer
      .create(<Breadcrumb />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders current page when a string is passed', () => {
    const component = renderer
      .create(<Breadcrumb current="Test" />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders `active` class on current breadcrumb ', () => {
    const component = renderer.create(
      <Breadcrumb current="Test" />
    );

    let instance = component.root;

    const item = instance.find(
      el => el.type == 'li'
        && el.props.className.includes('active')
    );

    expect(item).toBeInstanceOf(Object);
  });

});