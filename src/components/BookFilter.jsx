import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ clickHandler, authors }) => {
  return (
    <div className="filter">
      <h2>Filter by Author</h2>
      <div>
        <select id="filter" onChange={clickHandler}>
          <option key="0">All</option>)
          {authors.map(author => <option key={author.objectID}>{author}</option>)}
        </select>
      </div>
    </div>
  );
};

BookFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default BookFilter;
