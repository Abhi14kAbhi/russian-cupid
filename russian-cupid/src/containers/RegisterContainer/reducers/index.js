import { USER_REGISTERED } from '../actions/actionTypes';

const initialState = {};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
