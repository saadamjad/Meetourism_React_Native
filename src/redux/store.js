import {createStore, combineReducers, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import promise from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';

import thunk from 'redux-thunk';
import reducers from './reducers/reducers';

export const rootReducer = combineReducers({
  reducers,
});

const middlewares = [];

middlewares.push(promise);
middlewares.push(thunk);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'], // uncomment this line if you want to use persist for navigation
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(...middlewares),
);
const persistor = persistStore(store);
// const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export {store, persistor};
