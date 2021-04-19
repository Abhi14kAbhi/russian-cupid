import { USER_REGISTERED, REGISTER_USER_FAILED } from './actionTypes';

const initialState = {
  error: null,
  userData: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return { ...state, userData: action.data };
    case REGISTER_USER_FAILED:
      return { ...state, error: action.errorObj };
    default:
      return state;
  }
};
