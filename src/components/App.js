import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import BookInfo from './BookInfo';
import BookCatalog from './BookCatalog';
import About from './About';


const App = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route path="/info" component={BookInfo} />
        <Route path="/about" component={About} />
        <Route path="/" component={BookCatalog} />
      </Switch>
    </div>
  </div>
);

export default App;
