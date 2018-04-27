import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../src/app/header';

test('Header component should render as expected', () => {
  expect(toJson(shallow(<Header />))).toMatchSnapshot();
});
