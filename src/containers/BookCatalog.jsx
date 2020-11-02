import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BookFilter from '../components/BookFilter';
import { filterBooks } from '../actions';
import BookPreview from '../components/BookPreview';

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
    const {authors, books, filter} = this.props
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

  async componentDidMount() {
    await console.log('test')
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
});

const mapDispatchToProps = dispatch => ({
  filterBooks: filter => {
    dispatch(filterBooks(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCatalog);
