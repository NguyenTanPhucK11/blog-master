import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
Pagination.propTypes = {};

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const [activeNumber, setActiveNumber] = useState(1);
  const lastPagination = Math.ceil(totalPosts / postsPerPage);
  const [numberOfPagination, setNumberOfPagination] = useState(2);
  const firstNumberOfPagi =
    activeNumber - numberOfPagination < 1
      ? 1
      : activeNumber - numberOfPagination;
  const lastNumberOfPagi =
    activeNumber + numberOfPagination > lastPagination
      ? lastPagination
      : activeNumber + numberOfPagination;

  const onClickPagination = (number) => {
    paginate(number);
    setActiveNumber(number);
  };

  for (let i = firstNumberOfPagi; i <= lastNumberOfPagi; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li
          key={'<<'}
          className="page-item"
          onClick={(e) => {
            e.preventDefault();
            onClickPagination(1);
          }}
        >
          <a className="page-link" href="">
            <ArrowBack style={{ fontSize: 16 }}> </ArrowBack>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              className={
                activeNumber == +number ? 'active page-link' : 'page-link'
              }
              onClick={(e) => {
                e.preventDefault();
                onClickPagination(number);
              }}
              href=""
            >
              {number}
            </a>
          </li>
        ))}
        <li
          key={'>>'}
          className="page-item"
          onClick={(e) => {
            e.preventDefault();
            onClickPagination(lastPagination);
          }}
        >
          <a className="page-link" href="">
            <ArrowForward style={{ fontSize: 16 }}></ArrowForward>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
