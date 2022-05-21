import React, { useState } from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {};

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const [activeNumber, setActiveNumber] = useState(1);
  const onClickPagination = (number) => {
    paginate(number);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className={activeNumber == number ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onClickPagination(number);
                setActiveNumber(number);
              }}
              href=""
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
