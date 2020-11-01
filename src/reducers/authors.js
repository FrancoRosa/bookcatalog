import { FETCH_AUTHORS } from '../actions/index';

const authors = (state = [], action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      return action.authors;
    default:
      return state;
  }
};

export default authors;
