import { all } from 'redux-saga/effects';
import { registerUserSaga } from '../containers/RegisterContainer/sagas';
import { loginUserSaga } from '../containers/LoginContainer/sagas';
import { homeSaga } from '../containers/HomeContainer/sagas';

export default function* rootSaga() {
  yield all([registerUserSaga(), loginUserSaga(), homeSaga()]);
}
