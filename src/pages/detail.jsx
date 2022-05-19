import React from 'react';
import PropTypes from 'prop-types';
import Post from '../features/Posts/components';
import PostFeature from '../features/Posts';
import CommentFeature from '../features/Comments';

DetailPage.propTypes = {};

function DetailPage() {

  return (
    <div>
      <PostFeature  />
      <CommentFeature  />
    </div>
  );
}

export default DetailPage;
