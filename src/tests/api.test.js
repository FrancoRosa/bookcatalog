import expect from 'expect';
import '../actions/index';

const testFilterBooks = () => {
  const filterBefore = 'All';
  const filterAfter = 'This Author';

  const action = {
    filter: 'This Author',
    type: CHANGE_FILTER,
  };
  expect(filterBooks(filterBefore, action)).toEqual(filterAfter);
};


testFilterBooks()