import React from 'react';
import { Link } from 'react-router-dom';
import '../header-vancouver.jpg';

const Header = () => (
  <div className="head">
    <div className="header">
      <h1 className="header__title">My First Blog</h1>
    </div>
    <div className="header__nav">
      <Link className="header__nav__link" to="/posts">POSTS</Link>
      <Link className="header__nav__link" to="/post_new">NEW</Link>
      <Link className="header__nav__link" to="/info">INFO</Link>
    </div>
  </div>
);

module.exports = Header;
