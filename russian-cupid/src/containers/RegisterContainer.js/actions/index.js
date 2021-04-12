import * as types from './actionTypes';

export const registerUser = (data) => {
  return {
    type: types.REGISTER_USER,
    data,
  };
};

export const userRegistered = (data) => {
  return {
    type: types.USER_REGISTERED,
    data,
  };
};
