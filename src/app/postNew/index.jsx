import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class PostNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return fetch('http://localhost:10010/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.newPostTitle.value,
        author: 'me',
        body: this.newPostBody.value,
      }),
    }).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <h2 className="title">New Post</h2>
        <form className="form" id="post-new" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="post_new_title">Title:
              <textarea
                className="form__textarea"
                id="post_new_title"
                form="post-new"
                ref={(c) => { this.newPostTitle = c; }}
                cols="60"
                rows="1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="post_new_body">Text:
              <textarea
                className="form__textarea"
                id="post_new_body"
                form="post-new"
                ref={(c) => { this.newPostBody = c; }}
                cols="60"
                rows="8"
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

PostNew.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

export default withRouter(PostNew);
