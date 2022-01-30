import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CATALOG_REDUCER, CATEGORIES_REDUCER, TOPSALES_REDUCER } from './reducerNames';

import createFetcherLikeReducer from '../reducers/fetchLikeReducerFactory';
import topSalesReducer from '../reducers/topSalesReducer';
import categoriesReducer from "../reducers/categoriesReducer";
import catalogItemsReducer from "../reducers/catalogItemsReducer";

const reducer = combineReducers({
  topSales: createFetcherLikeReducer(topSalesReducer, TOPSALES_REDUCER),
  catalogItems: createFetcherLikeReducer(catalogItemsReducer, CATALOG_REDUCER),
  categories: createFetcherLikeReducer(categoriesReducer, CATEGORIES_REDUCER),
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
