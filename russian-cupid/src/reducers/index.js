import { combineReducers } from 'redux';

import { registerReducer } from '../containers/RegisterContainer/reducers';

const rootReducer = combineReducers({
  registerReducer,
});

export default rootReducer;
