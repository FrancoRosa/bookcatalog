import { combineReducers } from 'redux';
import authors from './authors';
import books from './books';
import filter from './filter';

const rootReducer = combineReducers({
  books,
  filter,
  authors,
});

export default rootReducer;
