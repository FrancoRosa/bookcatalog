import { FETCH_AUTHORS } from '../actions/index';
import authors from '../reducers/authors';

test('it should handle FETCH_AUTHORS', () => {
  const authorsBefore = [
    'Me',
    'You',
    'They',
  ];
  const authorsAfter = [
    'Her',
    'His',
    'Them',
  ];

  const action = {
    authors: [
      'Her',
      'His',
      'Them',
    ],
    type: FETCH_AUTHORS,
  };
  expect(authors(authorsBefore, action)).toEqual(authorsAfter);
});

test('it have a default value', () => {
  const authorsAfter = [];
  expect(authors(undefined, {})).toEqual(authorsAfter);
});
