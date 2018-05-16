import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Posts from '../src/app/posts';
import Post from '../src/app/posts/post';

const mockPosts = [
  {
    title: 'title1', body: 'body1', author: 'author1', _id: '1',
  },
  {
    title: 'title2', body: 'body2', author: 'author2', _id: '2',
  },
];

let wrapper;

describe('Posts - shallow', () => {
  beforeEach(() => {
    wrapper = shallow(<Posts />);
    jest.resetAllMocks();
    jest.restoreAllMocks();
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify([mockPosts[0]]));
  });

  afterEach(() => {
  });

  test('Snapshot - Posts component should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('should render Post component', () => {
    wrapper.setState({ posts: mockPosts });
    expect(wrapper.find(Post)).toHaveLength(2);
    expect(wrapper.containsMatchingElement(<Post key={mockPosts[0]._id} post={mockPosts[0]} />))
      .toEqual(true);
  });
  test('should call componentDidMount', () => {
    jest.spyOn(Posts.prototype, 'componentDidMount');
    Posts.prototype.componentDidMount();
    expect(Posts.prototype.componentDidMount).toHaveBeenCalled();
  });
  test('componentDidMount should call fetchData', () => {
    jest.spyOn(wrapper.instance(), 'fetchData');
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().fetchData).toHaveBeenCalled();
  });
  test('fetchData should call fetch with correct url', () => (
    wrapper.instance().fetchData().then(() => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('http://localhost:10010/api/posts');
    })
  ));
  test('fetchData should modify state with fetch data', () => (
    wrapper.instance().fetchData().then(() => {
      expect(wrapper.instance().state.posts).toEqual([mockPosts[0]]);
    })
  ));
  test('fetchData should handle error when fetch rejects', () => {
    fetch.resetMocks();
    fetch.mockReject(new Error('fake error message'));
    wrapper = shallow(<Posts />);
    return wrapper.instance().fetchData().then((error) => {
      expect(wrapper.instance().state.posts).toEqual([]);
      expect(error).toBe('fake error message');
    });
  });
});
