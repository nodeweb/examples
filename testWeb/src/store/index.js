import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import rootSaga from '../sagas';

const middlewares = [];

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV === 'development') {
      const logger = createLogger();
      middlewares.push(logger);
  }  
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  function createDefaultStore(initialsState) {
    const defaultStore = createStoreWithMiddleware(reducer, initialsState);
    return defaultStore;
  }
  
  const store = createDefaultStore();
  sagaMiddleware.run(rootSaga);
  return store;
};