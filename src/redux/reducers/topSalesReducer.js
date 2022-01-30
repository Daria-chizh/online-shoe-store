import { LOAD_TOPSALES } from '../actions/actionTypes';

const initialState = { items: [] };

export default function topSalesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPSALES:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
