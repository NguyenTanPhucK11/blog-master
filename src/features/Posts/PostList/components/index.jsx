import React from 'react';
import PropTypes from 'prop-types';
import PostComponent from './PostComponent';

Posts.propTypes = {};

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostComponent key={post.id} {...post} idImg={post.id} />
      ))}
    </ul>
  );
}

export default Posts;
