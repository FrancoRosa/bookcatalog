import React from 'react'
import { connect } from 'react-redux'
import BookFilter from '../components/BookFilter'
import { filterBooks } from '../actions'
import BookPreview from '../components/BookPreview'


const BookCatalog = ({authors, books, filter, filterBooks}) => {
  const handleSelection = (event) => {
    const filter = event.target.value;
    filterBooks(filter)
    console.log(filter)    
  }
  
  const bookResults = (books, filter) => {
    if (filter == 'All') return books;
    return books.filter(book => book.author == filter) 
  }

  return(
    <div>
      <h2>Catalog</h2>
      <BookFilter authors={authors} clickHandler={handleSelection}/>
      <ul>
        {bookResults(books, filter).map(book => <BookPreview book={book}/>)}
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
