import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ clickHandler, authors }) => (
  <div className="card">
    <div className="field has-addons">
      <div className="control">
        <button type="button" className="button is-primary">Author</button>
      </div>
      <div className="control is-expandend">
        <div className="select is-fullwidth">
          <select id="filter" onChange={clickHandler}>
            <option key="All">All</option>
            {authors.map(author => <option key={author}>{author}</option>)}
          </select>
        </div>
      </div>
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
