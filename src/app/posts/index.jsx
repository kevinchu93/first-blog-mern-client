/* eslint no-console: 0 */
/* ask Eric if console.logging errors is best practices */
import React from 'react';
import fetch from 'node-fetch';
import Post from './post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:10010/api/posts') // fetch rejects only when Network Error Occurs
      .then((res) => {
        if (!res.ok) throw res; // res.ok returns false if fetch receives error codes from API
        return res.json();
      })
      .then(data => this.setState({ posts: data }))
      .catch((error) => {
        if (error instanceof TypeError) { // check if error is a fetch rejection error
          console.log(error.message);
        } else {
          error.text().then(errorText => console.log(errorText));
        }
      });
  }

  render() {
    let { posts } = this.state;
    posts = posts.map(post => (
      <Post post={post} />
    ));
    return (
      <ul className="list">{posts}</ul>
    );
  }
}

module.exports = Posts;
