import React from 'react'
import { Link } from 'react-router-dom'
const BookPreview = ({ book }) => {
  const route = id => {
    console.log(id)
    return(`/book/${id}`);
  }
  return(
    <li>
      <p><Link to={route(book.author)}>{book.title}</Link></p>
      <p>{book.author}</p>
      <p>{book.category}</p>
    </li>
  );
}

export default BookPreview;
