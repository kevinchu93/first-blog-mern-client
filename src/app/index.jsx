import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Posts from './posts';
import PostDetail from './postDetail';
import PostNew from './postNew';
import './styles.css';

const App = () => (
  <div>
    <Header />
    <div className="body">
      <Route exact path="/" render={() => <Posts />} />
      <Route exact path="/posts" render={() => <Posts />} />
      <Route path="/posts/post_id" component={PostDetail} />
      <Route path="/post_new" component={PostNew} />
    </div>
  </div>
);

module.exports = App;
