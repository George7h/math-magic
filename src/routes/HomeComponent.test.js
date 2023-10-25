import React from 'react';
import renderer from 'react-test-renderer';
import Home from './HomeComponent';

test('Home component matches snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
