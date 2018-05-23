import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { createMemoryHistory } from 'history';
import PostNew from '../src/app/postNew';

const mockPosts = [
  {
    title: 'title1', body: 'body1', author: 'author1', _id: '1',
  },
  {
    title: 'title2', body: 'body2', author: 'author2', _id: '2',
  },
];

const history = createMemoryHistory('/');

let wrapper;

describe('PostNew - shallow', () => {
  beforeEach(() => {
    wrapper = shallow(<PostNew.WrappedComponent history={history} />);
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      body: true,
      json: () => Promise.resolve([
        mockPosts[0],
      ]),
    }));
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test('PostNew component should render as expected', () => {
    expect(toJson(shallow(<PostNew />))).toMatchSnapshot();
  });
  test('handleSubmit should call fetch with correct url', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().newPostTitle = { value: mockPosts[0].title };
    wrapper.instance().newPostBody = { value: mockPosts[0].body };
    return wrapper.instance().handleSubmit(mockEvent).then(() => {
      expect(global.fetch.mock.calls.length).toEqual(1);
      expect(global.fetch.mock.calls[0][0]).toEqual('http://localhost:10010/api/posts');
    });
  });
});
