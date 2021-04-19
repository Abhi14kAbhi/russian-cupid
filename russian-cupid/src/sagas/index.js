import { all } from 'redux-saga/effects';
import { registerUserSaga } from '../containers/RegisterContainer/sagas';

export default function* rootSaga() {
  yield all([registerUserSaga()]);
}
