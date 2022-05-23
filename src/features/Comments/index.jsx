import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import PostIdContext from '../../App';
import Comment from './components';
import './styles.scss';

CommentFeature.propTypes = {};

function CommentFeature({ idPost }) {
  const initComment = useSelector((state) => state.comment);
  const [commentList, setCommentList] = useState(initComment);
  // id = id == 0 ? 1 : id;

  useEffect(() => {
    async function fetchCommentList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/posts/' + idPost + '/comments';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setCommentList(responseJSON);
    }

    fetchCommentList();
  }, [idPost]);

  return (
    <>
      <h3 className ="number-comment">{commentList.length} Comments</h3>

      <ul className="post-comment">
        {commentList.map((comment) => (
          <Comment key={'comment-' + comment.id} {...comment} />
        ))}
      </ul>
    </>
  );
}

export default CommentFeature;
