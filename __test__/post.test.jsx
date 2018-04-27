import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from '../src/app/posts/post';

test('Post component should render as expected', () => {
  expect(toJson(shallow(<Post />))).toMatchSnapshot();
});

