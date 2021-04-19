import * as types from './actionTypes';

export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER,
    data,
  };
};

export const userLoggedIn = (data) => {
  return {
    type: types.USER_LOGGED_IN,
    data,
  };
};

export const userLoginFailed = (errorObj) => {
  return {
    type: types.LOGIN_USER_FAILED,
    errorObj,
  };
};
