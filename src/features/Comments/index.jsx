import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Comment from './components';
import { useSelector } from 'react-redux';

CommentFeature.propTypes = {};

function CommentFeature({ id }) {
  const initComment = useSelector((state) => state.comment);
  const [commentList, setCommentList] = useState(initComment);
  id = id == 0 ? 1 : id;
  useEffect(() => {
    async function fetchCommentList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setCommentList(responseJSON);
    }

    fetchCommentList();
  }, [id]);

  return (
    <ul>
      {commentList.map((comment) => (
        <Comment key={'comment-' + comment.id} {...comment} />
      ))}
    </ul>
  );
}

export default CommentFeature;
