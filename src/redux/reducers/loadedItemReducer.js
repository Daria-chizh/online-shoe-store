import { LOAD_PAGE_ITEM } from '../actions/actionTypes';

const initialState = { item: undefined };

export default function loadedItemReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PAGE_ITEM:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
