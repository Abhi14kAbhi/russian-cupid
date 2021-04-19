import { all } from 'redux-saga/effects';
import { registerUserSaga } from '../containers/RegisterContainer/sagas';
import { loginUserSaga } from '../containers/LoginContainer/sagas';

export default function* rootSaga() {
  yield all([registerUserSaga(), loginUserSaga()]);
}
