import * as types from './actionTypes';

export const getUserDetails = () => {
  return {
    type: types.GET_USER_DETAILS,
  };
};

export const userDetailsReceived = (data) => {
  return {
    type: types.USER_DETAILS_RECEIVED,
    userData: data,
  };
};

export const getHeader = () => {
  return {
    type: types.GET_HEADER,
  };
};

export const headerReceived = (data) => {
  return {
    type: types.HEADER_RECEIVED,
    header: data,
  };
};

export const getCountries = () => {
  return {
    type: types.GET_COUNTRIES,
  };
};

export const countriesReceived = (data) => {
  return {
    type: types.COUNTRIES_RECEIVED,
    countries: data,
  };
};

export const getProfiles = () => {
  return {
    type: types.GET_PROFILES,
  };
};

export const profilesReceived = (data) => {
  return {
    type: types.PROFILES_RECEIVED,
    profiles: data,
  };
};
