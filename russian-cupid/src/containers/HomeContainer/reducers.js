import {
  COUNTRIES_RECEIVED,
  HEADER_RECEIVED,
  USER_DETAILS_RECEIVED,
  PROFILES_RECEIVED,
} from './actionTypes';

const initialState = {
  error: null,
  countries: [],
  header: {},
  userData: null,
  profiles: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_RECEIVED:
      return { ...state, countries: action.data };
    case HEADER_RECEIVED:
      return { ...state, header: action.data };
    case USER_DETAILS_RECEIVED:
      return { ...state, header: action.userData };
    case PROFILES_RECEIVED:
      return { ...state, profiles: action.data };
    default:
      return state;
  }
};
