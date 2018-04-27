import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostDetail from '../src/app/postDetail';

test('PostDetail component should render as expected', () => {
  expect(toJson(shallow(<PostDetail />))).toMatchSnapshot();
});

