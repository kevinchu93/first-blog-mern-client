const React = require('react');
const PostComponent = require('./post');

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:10010/api/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    let { posts } = this.state;
    posts = posts.map(post => (
      <PostComponent post={post} />
    ));
    return (
      <ul className="list">{posts}</ul>
    );
  }
}

module.exports = Posts;
