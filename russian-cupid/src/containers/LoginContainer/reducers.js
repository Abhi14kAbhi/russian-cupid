import { USER_LOGGED_IN, LOGIN_USER_FAILED } from './actionTypes';

const initialState = {
  error: null,
  userData: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, userData: action.data };
    case LOGIN_USER_FAILED:
      return { ...state, error: action.errorObj };
    default:
      return state;
  }
};
