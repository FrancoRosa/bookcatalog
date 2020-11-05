import { SAVE_TIMESTAMP } from '../actions/index';
import timestamp from '../reducers/timestamp';

test('it should handle SAVE_TIMESTAMP', () => {
  const timestampBefore = 0;
  const timestampAfter = 1;

  const action = {
    timestamp: 1,
    type: SAVE_TIMESTAMP,
  };
  expect(timestamp(timestampBefore, action)).toEqual(timestampAfter);
});

test('it have a default value', () => {
  const timestampAfter = 0;
  expect(timestamp(undefined, {})).toEqual(timestampAfter);
});
