import React from 'react'
import { connect } from 'react-redux';

const BookInfo = ({match, books})  => {
  let book = books.filter(book => book.author === match.params.id)
  if (book.length === 0) return <p>Book not found. Return to catalog</p> 
  
  book = book[0];
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author} </p>
      <p>Author</p>
      <p>etc.</p>
      {console.log('>>><this book')}
      {console.log(books)}
      {console.log(match.params.id)}
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookInfo);
