import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from '../src/app/posts/post';


describe('Post - shallow', () => {
  const mockPost = {
    title: 'title',
    body: 'body',
    author: 'author',
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Post post={mockPost} />);
  });
  test('Post component should render as expected - snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

