import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Posts from '../src/app/posts';

test('Posts component should render as expected', () => {
  expect(toJson(shallow(<Posts />))).toMatchSnapshot();
});

