
import { SAVE_TIMESTAMP } from '../actions/index';

const timestamp = (state = 0, action) => {
  switch (action.type) {
    case SAVE_TIMESTAMP:
      return action.timestamp;
    default:
      return state;
  }
};

export default timestamp;
