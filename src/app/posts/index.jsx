/* eslint no-console: 0 */
/* ask Eric if console.logging errors is best practices */
import React from 'react';
import Post from './post';

require('es6-promise').polyfill();

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    return fetch('http://localhost:10010/api/posts') // fetch rejects only when Network Error Occurs
      .then((res) => {
        if (!res.ok) throw res; // res.ok returns false if fetch receives error codes from API
        return res.body ? res.json() : [];
      })
      .then(data => this.setState({ posts: data }))
      .catch((error) => {
        if (typeof error.text === 'function') {
          return error.text().then((errorText) => {
            console.log(errorText);
            return errorText;
          });
        }
        console.log(error.message);
        return error.message;
      });
  }

  render() {
    let { posts } = this.state;
    posts = posts.map(post => <Post key={post._id} post={post} />);
    return (
      <ul className="list">{posts}</ul>
    );
  }
}

module.exports = Posts;
