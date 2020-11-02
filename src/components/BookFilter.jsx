import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ clickHandler, authors }) => (
  <div className="filter">
    <h2>Filter by Author</h2>
    <div>
      <select id="filter" onChange={clickHandler}>
        <option key="All">All</option>
        {authors.map(author => <option key={author}>{author}</option>)}
      </select>
    </div>
  </div>
);

BookFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default BookFilter;
