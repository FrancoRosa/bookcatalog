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
  } = book[0];

  const keyValue = (key, value) => (
    <div className="media-content">
      <p className="title is-5">{key}</p>
      <p className="subtitle is-5">{value}</p>
    </div>
  );

  return (
    <div className="card book-info">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="cover" />
        </figure>
      </div>
      <div className="card-content">
        <p className="title">{title}</p>
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="author" />
            </figure>
          </div>
          {keyValue(' ', contributor)}
        </div>
        <div className="content">
          {keyValue('Description', description)}
          <br />
          {keyValue('Author', author)}
          <br />
          {keyValue('Publisher', publisher)}
          <br />
        </div>
      </div>
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
