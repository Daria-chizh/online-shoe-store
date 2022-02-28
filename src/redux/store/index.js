import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CATALOG_REDUCER, CATEGORIES_REDUCER, TOPSALES_REDUCER, LOADEDITEM_REDUCER } from './reducerNames';

import { localStorageMiddleware } from '../localStorageMiddleware';

import createFetcherLikeReducer from '../reducers/fetchLikeReducerFactory';
import topSalesReducer from '../reducers/topSalesReducer';
import categoriesReducer from "../reducers/categoriesReducer";
import catalogItemsReducer from "../reducers/catalogItemsReducer";
import loadedItemReducer from "../reducers/loadedItemReducer";
import cartReducer from "../reducers/cartReducer"

const reducer = combineReducers({
  topSales: createFetcherLikeReducer(topSalesReducer, TOPSALES_REDUCER),
  catalogItems: createFetcherLikeReducer(catalogItemsReducer, CATALOG_REDUCER),
  categories: createFetcherLikeReducer(categoriesReducer, CATEGORIES_REDUCER),
  loadedItem: createFetcherLikeReducer(loadedItemReducer, LOADEDITEM_REDUCER),
  cart: cartReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, localStorageMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
