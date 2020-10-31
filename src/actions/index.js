export const FETCH_BOOKS = 'FETCH_BOOKS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchBooks = books => (
  {
    books,
    type: FETCH_BOOKS,
  }
);

export const filterBooks = filter => (
  {
    filter,
    type: CHANGE_FILTER,
  });
