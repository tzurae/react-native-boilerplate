import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import rootEpics from './rootEpics';
import Config from 'react-native-config';

const epicMiddleware = createEpicMiddleware();

const middlewares = [
  epicMiddleware,
];

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (Config.ENV === 'DEV') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger({
    collapsed: true,
    duration: true
  }))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);

  epicMiddleware.run(rootEpics);

  const store = createStoreWithMiddleware(persistedReducer, undefined);

  let persistor = persistStore(store);

  return {
    store,
    persistor,
  }
};

export default configureStore;
