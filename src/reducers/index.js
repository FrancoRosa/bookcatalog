import { combineReducers } from 'redux';
import authors from './authors';
import books from './books';
import filter from './filter';
import timestamp from './timestamp';
import api from './api';

const rootReducer = combineReducers({
  books,
  filter,
  authors,
  timestamp,
  api,
});

export default rootReducer;
