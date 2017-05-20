import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IStore } from './IStore';
import { sceptersReducer } from './modules/scepters';
import { ratingsReducer } from './modules/ratings';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  scepters: sceptersReducer,
  ratings: ratingsReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
