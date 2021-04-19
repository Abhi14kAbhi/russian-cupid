import { takeEvery, call, put, all } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as service from '../../service';
import * as actions from './actions';

// Worker
function* loginUser(action) {
  try {
    const { data } = action;
    const userData = yield call(service.loginUser, data);
    yield put(actions.userLoggedIn(userData));
  } catch (error) {
    yield put(actions.userLoginFailed(error.response.data));
  }
}

// Watcher
function* watchLoginUser() {
  yield takeEvery(types.LOGIN_USER, loginUser);
}

export function* loginUserSaga() {
  yield all([watchLoginUser()]);
}
