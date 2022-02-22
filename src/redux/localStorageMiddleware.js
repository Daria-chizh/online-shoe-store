import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './actions/actionTypes';

export const localStorageMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === ADD_ITEM_TO_CART || action.type === REMOVE_ITEM_FROM_CART) {
    const { cart } = store.getState();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};
