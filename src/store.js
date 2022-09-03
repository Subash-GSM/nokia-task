import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './rootReducer';
import rootSaga from './Redux-Saga/saga';

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configStore();
