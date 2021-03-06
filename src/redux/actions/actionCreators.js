import { TOPSALES_REDUCER, CATEGORIES_REDUCER, CATALOG_REDUCER, LOADEDITEM_REDUCER } from '../store/reducerNames';

import {
  LOAD_TOPSALES,
  LOAD_CATEGORIES,
  APPEND_CATALOG_ITEMS, LOAD_CATALOG_ITEMS,
  LOAD_PAGE_ITEM,
  ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART
} from "./actionTypes";

// actions for reducers with fetcher part
export function fetchStart(reducerName) {
  return { type: `FETCH_${reducerName}_START` };
}

export function fetchDone(reducerName) {
  return { type: `FETCH_${reducerName}_DONE` };
}

export function fetchError(reducerName, error) {
  return { type: `FETCH_${reducerName}_DONE`, payload: { error } };
}

// simple actions for cart reducer

export function addItemToCart(item) {
  return { type: ADD_ITEM_TO_CART, payload: item };
}

export function removeItemFromCart(item) {
  return { type: REMOVE_ITEM_FROM_CART, payload: item };
}

export function clearCart(item) {
  return { type: CLEAR_CART, payload: item };
}

// simple actions for top-sales reducer

export function loadTopSales(items) {
  return { type: LOAD_TOPSALES, payload: items };
}

export function loadPageItem(items) {
  return { type: LOAD_PAGE_ITEM, payload: items };
}

// simple actions for category list reducer

export function loadCategories(items) {
  return { type: LOAD_CATEGORIES, payload: items };
}

// simple actions for catalog reducer

export function loadCatalogItems(items) {
  return { type: LOAD_CATALOG_ITEMS, payload: { items } };
}

export function appendCatalogItems(items) {
  return { type: APPEND_CATALOG_ITEMS, payload: { items } };
}

// complex actions

function createFetchLikeThumbFn(reducerName, fn) {
  return async (dispatch) => {
    dispatch(fetchStart(reducerName));
    try {
      await fn(dispatch);
      dispatch(fetchDone(reducerName));
    } catch (error) {
      dispatch(fetchError(reducerName, error));
    }
  };
}

export function fetchTopSales() {
  return createFetchLikeThumbFn(TOPSALES_REDUCER, async (dispatch) => {
    const items = await fetch('http://localhost:7070/api/top-sales').then((response) => response.json());
    dispatch(loadTopSales(items));
  });
}

export function fetchCatalogItems(id, offset = 0, search) {
  return createFetchLikeThumbFn(CATALOG_REDUCER, async (dispatch) => {
    let url = id
      ? `http://localhost:7070/api/items?categoryId=${id}&offset=${offset}`
      : `http://localhost:7070/api/items?offset=${offset}`;

    if (search) {
      url += `&q=${search}`;
    }

    const items = await fetch(url).then((response) => response.json());
    dispatch(offset ? appendCatalogItems(items) : loadCatalogItems(items));
  });
}

export function fetchCategories() {
  return createFetchLikeThumbFn(CATEGORIES_REDUCER, async (dispatch) => {
    const items = await fetch('http://localhost:7070/api/categories').then((response) => response.json());
    dispatch(loadCategories([{ id: null, title: '??????' }, ...items]));
  });
}

export function fetchItem(id) {
  return createFetchLikeThumbFn(LOADEDITEM_REDUCER, async (dispatch) => {
    const items = await fetch(`http://localhost:7070/api/items/${id}`).then((response) => response.json());
    dispatch(loadPageItem(items));
  });
}
