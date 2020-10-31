import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Navbar';
import BookInfo from './BookInfo';
import BookCatalog from './BookCatalog';
import About from './About';


const App = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <Route path="/" component={BookCatalog} />
      <Route path="/info" component={BookInfo} />
      <Route path="/about" component={About} />
    </div>
  </div>
);

export default App;
