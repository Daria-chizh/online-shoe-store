import { LOAD_CHECKOUT } from '../actions/actionTypes';

const initialState = { items: [] };

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHECKOUT:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
