import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import BookFilter from '../components/BookFilter';
import BookPreview from '../components/BookPreview';
import {
  filterBooks,
  saveTimestamp,
  changeStatus,
  fetchBooks,
  fetchAuthors,
} from '../actions';

class BookCatalog extends Component {
  componentDidMount() {
    const { timestamp, changeStatus, filterBooks } = this.props;
    const updateMs = 60000;
    const now = Date.now();

    filterBooks('All');

    if ((now - timestamp) > updateMs) {
      changeStatus('CallingAPI');
      this.getBooks();
    }
  }

  async getBooks() {
    const {
      changeStatus, saveTimestamp, fetchBooks, fetchAuthors,
    } = this.props;
    const url = 'https://api.nytimes.com/svc/books/v3/lists/';
    const end = 'best-sellers/history.json?';
    const key = '&api-key=6ad84e249d054efeaefe1abb8f89df5b';
    try {
      const data = await axios.get(`${url}${end}${key}`);
      const books = data.data.results;
      fetchBooks(books);
      fetchAuthors(books.map(book => book.author));
      changeStatus('Completed');
    } catch (error) {
      changeStatus('Error');
    }
    saveTimestamp(Date.now());
  }

  bookResults = (books, filter) => {
    if (filter === 'All') return books;
    return books.filter(book => book.author === filter);
  }

  handleSelection = event => {
    const { filterBooks } = this.props;
    const filter = event.target.value;
    filterBooks(filter);
  }

  render() {
    const {
      authors, books, filter, api,
    } = this.props;

    if (api !== 'Completed') {
      return (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-content about">
            <p>Getting latest data</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <BookFilter authors={authors} clickHandler={this.handleSelection} />
        <div className="flex-wrap">
          {this.bookResults(books, filter).map(
            book => <BookPreview key={book.objectID} book={book} />,
          )}
        </div>
      </div>
    );
  }
}

BookCatalog.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,

  filter: PropTypes.string.isRequired,

  authors: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,

  timestamp: PropTypes.number.isRequired,
  api: PropTypes.string.isRequired,

  filterBooks: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  saveTimestamp: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
  authors: state.authors,
  timestamp: state.timestamp,
  api: state.api,
});

const mapDispatchToProps = dispatch => ({
  filterBooks: filter => {
    dispatch(filterBooks(filter));
  },
  saveTimestamp: time => {
    dispatch(saveTimestamp(time));
  },
  changeStatus: status => {
    dispatch(changeStatus(status));
  },
  fetchBooks: books => {
    dispatch(fetchBooks(books));
  },
  fetchAuthors: authors => {
    dispatch(fetchAuthors(authors));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCatalog);
