import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookPreview = ({ book }) => {
  const route = id => `/book/${id}`;
  return (
    <li key={book.author}>
      <p><Link to={route(book.author)}>{book.title}</Link></p>
      <p>{book.author}</p>
      <p>{book.category}</p>
    </li>
  );
};

BookPreview.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookPreview;
