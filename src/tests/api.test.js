import { CHANGE_FETCH_STATUS } from '../actions/index';
import api from '../reducers/api';

test('it should handle CHANGE_FETCH_STATUS', () => {
  const apiBefore = 'CallingAPI';
  const apiAfter = 'Completed';

  const action = {
    status: 'Completed',
    type: CHANGE_FETCH_STATUS,
  };
  expect(api(apiBefore, action)).toEqual(apiAfter);
});

test('it have a default value', () => {
  const apiAfter = 'CallingAPI';
  expect(api(undefined, {})).toEqual(apiAfter);
});
