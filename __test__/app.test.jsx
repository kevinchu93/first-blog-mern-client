import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/app';

test('App component should render as expected', () => {
  expect(toJson(shallow(<App />))).toMatchSnapshot();
});
