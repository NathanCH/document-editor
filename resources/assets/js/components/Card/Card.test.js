import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
  test('it renders without props', () => {
    const component = renderer
      .create(<Card />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders `props.customSection`', () => {
    const SubComponent = () => <span>Test</span>;

    const component = renderer
      .create(<Card customSection={<SubComponent />} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders `props.title`', () => {
    const component = renderer
      .create(<Card title="Hello" />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('it renders `props.text`', () => {
    const component = renderer
      .create(<Card text="World" />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

});