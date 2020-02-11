import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const errorsCount = 3;

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      errorsCount = {errorsCount}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
