import React from 'react';
import renderer from 'react-test-renderer';

import Breadcrumb from './Breadcrumb';

describe('<BreadCrumb />', () => {
  test('it renders without props', () => {
    const component = renderer
      .create(<Breadcrumb />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders `props.current`', () => {
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