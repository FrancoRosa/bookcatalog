import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookInfo = ({ match, books }) => {
  const book = books.filter(book => book.author === match.params.id);
  if (book.length === 0) return <p>Book not found. Return to catalog</p>;

  const {
    title,
    author,
    description,
    publisher,
    contributor,
    isbns,
  } = book[0];

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Author:
        {author}
      </p>
      <p>
        Contributor:
        {contributor}
      </p>
      <p>
        Description:
        {description}
      </p>
      <p>
        Publisher:
        {publisher}
      </p>
      <p>
        ISBN:
        {isbns[0].isbn10}
        ,
        {isbns[0].isbn10}
      </p>
    </div>
  );
};

BookInfo.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.object,
    ),
  ).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookInfo);
