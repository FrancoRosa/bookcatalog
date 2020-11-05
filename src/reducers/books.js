import { FETCH_BOOKS } from '../actions/index';

const books = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default books;
