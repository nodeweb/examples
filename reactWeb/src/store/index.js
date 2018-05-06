import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  let middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV === 'development') {
      const logger = createLogger();
      middlewares.push(logger);
  }
  const store = createStore(
      reducer,
      initialState,
      applyMiddleware(...middlewares)
  )
 
  sagaMiddleware.run(rootSaga)

  return store
  
};
