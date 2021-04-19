import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
let composeEnhancers = compose;
if (window) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const finalCreateStore = composeEnhancers(applyMiddleware(saga))(createStore);
const store = finalCreateStore(rootReducer, {});

saga.run(rootSaga);
export default store;
