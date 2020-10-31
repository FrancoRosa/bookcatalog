import React from 'react'

const BookInfo = (props) => (
  <div>
    <h2>Book {props.match.params.id}</h2>
    <p>Title</p>
    <p>Author</p>
    <p>etc.</p>
  </div>
);

export default BookInfo;