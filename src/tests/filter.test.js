import { CHANGE_FILTER } from '../actions/index';
import filter from '../reducers/filter';

test('it should handle CHANGE_FILTER', () => {
  const filterBefore = 'All';
  const filterAfter = 'This Author';

  const action = {
    filter: 'This Author',
    type: CHANGE_FILTER,
  };
  expect(filter(filterBefore, action)).toEqual(filterAfter);
});

test('it have a default value', () => {
  const filterAfter = 'All';
  expect(filter(undefined, {})).toEqual(filterAfter);
});
