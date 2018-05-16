import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostNew from '../src/app/postNew';
import { createMemoryHistory } from 'history'

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
    fetch.mockResponse(JSON.stringify([mockPosts[0]]));
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
    fetch.resetMocks();
  });

  test('PostNew component should render as expected', () => {
    expect(toJson(shallow(<PostNew />))).toMatchSnapshot();
  });
  test('handleSubmit should call fetch with correct url', () => {
    const mockEvent= { preventDefault: jest.fn() };
    wrapper.instance().newPostTitle = { value: mockPosts[0].title };
    wrapper.instance().newPostBody = { value: mockPosts[0].body };
    return wrapper.instance().handleSubmit(mockEvent).then(() => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('http://localhost:10010/api/posts');
    })
  });
});
