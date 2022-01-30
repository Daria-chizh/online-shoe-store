import { LOAD_CATEGORIES } from '../actions/actionTypes';

const initialState = { items: [] };

export default function categoriesListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
