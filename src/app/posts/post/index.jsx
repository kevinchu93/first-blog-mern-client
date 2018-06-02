import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = props => (
  <li className="post">
    <Link className="post__title" to="/posts/post_id">{props.post.title}</Link>
    <p className="post__body">{props.post.body}</p>
    <p className="post__author">{props.post.author}</p>
  </li>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
  }),
};

Post.defaultProps = {
  post: {
    title: 'none',
    body: 'none',
    author: 'annonymous',
  },
};

module.exports = Post;
