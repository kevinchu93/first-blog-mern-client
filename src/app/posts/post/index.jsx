import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = props => (
  <li>
    <h2><Link className="title" to="/posts/post_id">{props.post.title}</Link></h2>
    <p>{props.post.body}</p>
    <p className="author">{props.post.author}</p>
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
