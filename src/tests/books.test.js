import { FETCH_BOOKS } from '../actions/index';
import books from '../reducers/books';

test('it should handle FETCH_BOOKS', () => {
  const booksBefore = [
    {
      title: 'ThisBook',
      author: 'ThisAuthor',
    },
  ];
  const booksAfter = [
    {
      title: 'ThatBook',
      author: 'ThatAuthor',
    },
  ];

  const action = {
    books: [{
      title: 'ThatBook',
      author: 'ThatAuthor',
    }],
    type: FETCH_BOOKS,
  };
  expect(books(booksBefore, action)).toEqual(booksAfter);
});

test('it have a default value', () => {
  const booksAfter = [];
  expect(books(undefined, {})).toEqual(booksAfter);
});
