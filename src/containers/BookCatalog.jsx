import React from 'react'
import { connect } from 'react-redux'
import BookFilter from '../components/BookFilter'
import { filterBooks } from '../actions'
import BookPreview from '../components/BookPreview'


const BookCatalog = ({authors, books, filter}) => {
  return(
    <div>
      <h2>Catalog</h2>
      <BookFilter authors={authors}/>
      <ul>
        {books.map(book => <BookPreview book={book}/>)}
      </ul>
    </div>
)};

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
