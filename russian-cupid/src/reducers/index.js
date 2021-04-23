import { combineReducers } from 'redux';

import { registerReducer } from '../containers/RegisterContainer/reducers';
import { loginReducer } from '../containers/LoginContainer/reducers';
import { homeReducer } from '../containers/HomeContainer/reducers';

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  homeReducer,
});

export default rootReducer;
