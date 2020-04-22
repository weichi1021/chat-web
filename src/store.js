import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import browserHistory from '@forestage/history.js';

import { userReducer } from '@forestage/store/userReducer.js';

const middleware = routerMiddleware(browserHistory);

const persistConfig = {
  key       : 'self_service_laundry',
  storage,
  whitelist : ['accessToken', 'rememberEnabled', 'rememberUsername', 'rememberPWD']
};

export const store = createStore(
  combineReducers({
    routing : routerReducer,
    user    : persistReducer(persistConfig, userReducer),
    // pageStatus : pageStatusReducer,
  }),
  applyMiddleware(middleware)
);

export const persistor = persistStore(store);