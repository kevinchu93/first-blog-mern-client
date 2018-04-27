import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostNew from '../src/app/postNew';

test('PostNew component should render as expected', () => {
  expect(toJson(shallow(<PostNew />))).toMatchSnapshot();
});

