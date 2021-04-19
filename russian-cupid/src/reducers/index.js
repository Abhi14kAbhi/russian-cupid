import { combineReducers } from 'redux';

import { registerReducer } from '../containers/RegisterContainer/reducers';
import { loginReducer } from '../containers/LoginContainer/reducers';

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
});

export default rootReducer;
