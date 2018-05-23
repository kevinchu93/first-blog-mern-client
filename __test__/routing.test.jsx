/* eslint function-paren-newline: 0 */
import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from '../src/app';
import Posts from '../src/app/posts';
import PostDetail from '../src/app/postDetail';
import PostNew from '../src/app/postNew';

test('should render Posts component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App />
    </MemoryRouter>,
  );
  expect(component.find(Posts).length).toBe(1);
});

test('should render Posts component when visiting /posts', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/posts']} initialIndex={0}>
      <App />
    </MemoryRouter>,
  );
  expect(component.find(Posts).length).toBe(1);
});

test('should render PostDetail component when visiting /posts/post_id', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/posts/post_id']} initialIndex={0}>
      <App />
    </MemoryRouter>,
  );
  expect(component.find(PostDetail).length).toBe(1);
});

test('should render PostNew component when visiting /post_new', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/post_new']} initialIndex={0}>
      <App />
    </MemoryRouter>,
  );
  expect(component.find(PostNew).length).toBe(1);
});
