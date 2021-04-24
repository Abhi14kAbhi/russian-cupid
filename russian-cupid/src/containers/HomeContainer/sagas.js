import { takeEvery, call, put, all } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as service from '../../service';
import * as actions from './actions';

// Workers
function* getUserDetails() {
  try {
    const userData = yield call(
      service.api,
      '/user/get-user',
      'get',
      true,
      null
    );
    yield put(actions.userDetailsReceived(userData));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

function* getHeader() {
  try {
    const header = yield call(service.api, '/user/header', 'get', true, null);
    yield put(actions.headerReceived(header));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

function* getCountries() {
  try {
    const countries = yield call(
      service.api,
      '/user/get-countries?target=country',
      'get',
      true,
      null
    );
    yield put(actions.countriesReceived(countries));
  } catch (error) {
    console.log(error);
    // yield put(actions.userLoginFailed(error.response.data));
  }
}

function* getProfiles() {
  try {
    const profiles = yield call(
      service.api,
      '/user/get-profiles?partnerGender=FEMALE&sort=NEWEST_FIRST&gender=MALE&offset=0',
      'get',
      true,
      null
    );
    yield put(actions.getProfiles(profiles));
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
