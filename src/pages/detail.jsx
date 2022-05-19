import React from 'react';
import PropTypes from 'prop-types';
import Post from '../features/Posts/components';
import PostFeature from '../features/Posts';
import CommentFeature from '../features/Comments';

DetailPage.propTypes = {};

function DetailPage(props) {
  const id = 1;
  return (
    <div>
      <PostFeature id={id} />
      <CommentFeature id={id} />
    </div>
  );
}

export default DetailPage;
