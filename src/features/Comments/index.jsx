import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import PostIdContext from '../../App';
import Comment from './components';
import './styles.scss';

CommentFeature.propTypes = {};

function CommentFeature({ id }) {
  const initComment = useSelector((state) => state.comment);
  const [commentList, setCommentList] = useState(initComment);
  // id = id == 0 ? 1 : id;
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
    <ul className="post-comment">
      {commentList.map((comment) => (
        <Comment key={'comment-' + comment.id} {...comment} />
      ))}
    </ul>
  );
}

export default CommentFeature;
