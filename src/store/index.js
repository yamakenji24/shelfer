import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      logger
    )
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
