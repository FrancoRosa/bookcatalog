import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookPreview = ({ book }) => {
  const route = id => `/book/${id}`;
  const { title, author, publisher } = book;
  return (
    <div key={book.author} className="card">
      <div className="card-content">
        <div className="content">
          <Link to={route(author)}>{title}</Link>
          <p className="headline">{author}</p>
        </div>
      </div>
      <footer className="card-footer">
        <p className="subtitle is-7">
          {`Publisher: ${publisher}`}
        </p>
      </footer>
    </div>
  );
};

BookPreview.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
  }).isRequired,
};

export default BookPreview;
