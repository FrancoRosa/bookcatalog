export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SAVE_TIMESTAMP = 'SAVE_TIMESTAMP';
export const CHANGE_FETCH_STATUS = 'CHANGE_FETCH_STATUS';

export const fetchBooks = books => (
  {
    books,
    type: FETCH_BOOKS,
  }
);

export const fetchAuthors = authors => (
  {
    authors,
    type: FETCH_AUTHORS,
  }
);

export const filterBooks = filter => (
  {
    filter,
    type: CHANGE_FILTER,
  }
);

export const saveTimestamp = timestamp => (
  {
    timestamp,
    type: SAVE_TIMESTAMP,
  }
);

export const changeStatus = status => (
  {
    status,
    type: CHANGE_FETCH_STATUS,
  }
);
