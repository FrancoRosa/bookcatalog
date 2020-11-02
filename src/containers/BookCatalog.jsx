import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BookFilter from '../components/BookFilter';
import BookPreview from '../components/BookPreview';
import {
  filterBooks,
  saveTimestamp,
  changeStatus,
  fetchBooks, 
  fetchAuthors
} from '../actions';

class BookCatalog extends Component {

  handleSelection = (event) => {
    const filter = event.target.value;
    this.props.filterBooks(filter)
    console.log(filter)    
  }
  
  bookResults = (books, filter) => {
    if (filter === 'All') return books;
    return books.filter(book => book.author === filter) 
  }


  render() {
    const {authors, books, filter, api } = this.props
    
    if (api !== 'Completed') return <p>getting latest books</p>
    
    return (
      <div>
        <h2>Catalog</h2>
        <BookFilter authors={authors} clickHandler={this.handleSelection}/>
        <ul>
          {this.bookResults(books, filter).map(book => <BookPreview book={book}/>)}
        </ul>
      </div>
    )
  }

  async getBooks() {
    const {changeStatus, saveTimestamp, fetchBooks, fetchAuthors } = this.props
    const url = 'https://api.nytimes.com/svc/books/v3/lists/';
    const end = 'best-sellers/history.json?';
    const key = '&api-key=6ad84e249d054efeaefe1abb8f89df5b';
    try {
      const data = await axios.get(`${url}${end}${key}`)
      const books = data.data.results 
      fetchBooks(books)
      fetchAuthors(books.map(book => book.author))
      changeStatus('Completed')
    } catch (error) {
      changeStatus('Error')
    }
    saveTimestamp(Date.now())
  }

  componentDidMount() {
    const { timestamp, changeStatus} = this.props;
    const updateMs = 60000
    const now = Date.now()
    if ((now - timestamp) > updateMs) {
      console.log('Send request');
      changeStatus('CallingAPI');
      this.getBooks();
    }

    // const url = 'https://api.nytimes.com/svc/books/v3/lists/';
    // const end = 'best-sellers/history.json?';
    // const key = '&api-key=6ad84e249d054efeaefe1abb8f89df5b';
    // const data = await axios.get(`${url}${end}${key}`)
    // console.log(data)
  }
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
    dispatch(saveTimestamp(time))
  },
  changeStatus: status => {
    dispatch(changeStatus(status))
  },
  fetchBooks: books => {
    dispatch(fetchBooks(books))
  },
  fetchAuthors: authors => {
    dispatch(fetchAuthors(authors))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCatalog);
