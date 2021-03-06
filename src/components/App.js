import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import BookInfo from '../containers/BookInfo';
import BookCatalog from '../containers/BookCatalog';
import About from './About';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route path="/book/:id" component={BookInfo} />
        <Route path="/books" component={BookCatalog} />
        <Route path="/about" component={About} />
        <Route path="/" component={BookCatalog} />
      </Switch>
    </div>
  </div>
);

export default App;
