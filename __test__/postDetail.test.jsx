import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostDetail from '../src/app/postDetail';

describe('PostDetail - shallow', () => {
  test('PostDetail component should render as expected - snapshot', () => {
    expect(toJson(shallow(<PostDetail />))).toMatchSnapshot();
  });
});

