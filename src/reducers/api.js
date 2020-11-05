import { CHANGE_FETCH_STATUS } from '../actions/index';

const api = (state = 'CallingAPI', action) => {
  switch (action.type) {
    case CHANGE_FETCH_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default api;
