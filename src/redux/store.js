// src/redux/store.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import galleryReducer from './galleryReducer';

// Enable Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
const store = createStore(
  galleryReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
