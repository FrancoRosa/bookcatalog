import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: 10,
      title: 'Sci-Fi Book',
      author: 'Me',
      category: 'Sci-Fi',
    },
    {
      id: 20,
      title: 'Bio of a guide',
      author: 'You',
      category: 'Biography',
    },
    {
      id: 30,
      title: 'Panic',
      author: 'She',
      category: 'Horror',
    },
    {
      id: 40,
      title: 'Panic Kernel',
      author: 'He',
      category: 'Horror',
    },
  ],
  filter: 'All',
  authors: [
    'Me',
    'He',
    'She',
    'They',
  ]
};

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
