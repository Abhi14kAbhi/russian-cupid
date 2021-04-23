import { takeEvery, call, put, all, take } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as service from '../../service';
import * as actions from './actions';

// Workers
function* getUserDetails(action) {
  try {
    // const userData = yield call(service.getUserDetails);
    // yield put(actions.userDetailsReceived(userData));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

function* getHeader(action) {
  try {
    // const header = yield call(service.getHeader);
    // yield put(actions.headerReceived(header));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

function* getCountries(action) {
  try {
    // const countries = yield call(service.getCountries);
    // yield put(actions.countriesReceived(countries));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

function* getProfiles(action) {
  try {
    // const profiles = yield call(service.getProfiles);
    // yield put(actions.getProfiles(profiles));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

// Watchers
function* watchGetUserDetails() {
  yield takeEvery(types.GET_USER_DETAILS, getUserDetails);
}

function* watchGetHeader() {
  yield takeEvery(types.GET_HEADER, getHeader);
}

function* watchGetCountries() {
  yield takeEvery(types.GET_COUNTRIES, getCountries);
}

function* watchGetProfiles() {
  yield takeEvery(types.GET_PROFILES, getProfiles);
}

export function* homeSaga() {
  yield all([
    watchGetUserDetails(),
    watchGetHeader,
    watchGetCountries,
    watchGetProfiles,
  ]);
}
