import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Posts from './posts';
import PostDetail from './postDetail';
import PostNew from './postNew';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: 'first', author: 'me', body: 'first content' },
        { title: 'second', author: 'me', body: 'second content' },
      ],
    };
    this.onAddPost = this.onAddPost.bind(this);
  }

  onAddPost(post) {
    this.state.posts.push(post);
    this.setState({
      posts: this.state.posts,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <Route exact path="/" render={() => <Posts posts={this.state.posts} />} />
          <Route exact path="/posts" render={() => <Posts posts={this.state.posts} />} />
          <Route path="/posts/post_id" component={PostDetail} />
          <Route path="/post_new" render={() => <PostNew onAddPost={this.onAddPost} />} />
        </div>
      </div>
    );
  }
}

module.exports = App;
