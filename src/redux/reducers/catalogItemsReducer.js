import { LOAD_CATALOG_ITEMS, APPEND_CATALOG_ITEMS } from '../actions/actionTypes';

const initialState = [];

export default function itemsListReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case LOAD_CATALOG_ITEMS:
      return { ...state, items: payload.items, fullyLoaded: payload.items.length < 6 };
    case APPEND_CATALOG_ITEMS:
      return { ...state, items: [...state.items, ...payload.items], fullyLoaded: payload.items.length < 6 };
    default:
      return state;
  }
}
