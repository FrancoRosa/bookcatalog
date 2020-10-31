import React from 'react'
import { Link } from 'react-router-dom'

const BookCatalog = () => (
  <div>
    <h2>Catalog</h2>
    <ul>
      <li><Link to="/book/1">Book 1</Link></li>
      <li><Link to="/book/2">Book 2</Link></li>
      <li><Link to="/book/3">Book 3</Link></li>
      <li><Link to="/book/4">Book 4</Link></li>
      <li><Link to="/book/5">Book 5</Link></li>
      <li><Link to="/book/6">Book 6</Link></li>
    </ul>
  </div>
)

export default BookCatalog;