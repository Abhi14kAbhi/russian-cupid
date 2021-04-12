import { takeEvery, call, put, all } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as service from '../../../service';
import * as actions from '../actions';

// Worker
function* registerUser(action) {
  const { data } = action;
  const userData = yield call(service.registerUser, data);
  yield put(actions.userRegistered(userData));
}

// Watcher
function* watchRegisterUser() {
  yield takeEvery(types.REGISTER_USER, registerUser);
}

export function* registerUserSaga() {
  yield all([watchRegisterUser()]);
}
