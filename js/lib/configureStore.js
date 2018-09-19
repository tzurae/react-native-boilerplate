// @flow
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  duration: true
});

const enhancers = [applyMiddleware(logger)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(...enhancers);

const configureStore = () => {
  const store = createStore(rootReducer, undefined, enhancer);
  return store;
};

export default configureStore;
