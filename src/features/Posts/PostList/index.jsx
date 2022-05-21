import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Posts from './components';
import Pagination from './components/Pagination';

PostListFeature.propTypes = {};

function PostListFeature(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const requesUrl = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(requesUrl);
      const responseJSON = await response.json(response);
      setPosts(responseJSON);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PostListFeature;
