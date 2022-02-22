// добавить action - CLEAR_CART

import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from '../actions/actionTypes';

// clone array and clone objects inside that array as well
const cloneArrayWithObjects = (arr) => arr.map((obj) => ({ ...obj }));

const initialState = JSON.parse(localStorage.getItem('cart') || null) || [];

export default function loadedItemReducer(state = initialState, action) {
  const item = action.payload;

  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const existingItem = state.find(({ title, selectedSize }) => item.title === title && item.selectedSize === selectedSize);
      if (!existingItem) {
        return [...cloneArrayWithObjects(state), item];
      }

      // shallow copy + update count for existing item
      return state.map(
        (currentItem) => currentItem === existingItem ? { ...currentItem, count: currentItem.count + item.count } : { ...currentItem }
      );

    case REMOVE_ITEM_FROM_CART:
      return cloneArrayWithObjects(
        state.filter(({ title, selectedSize }) => item.title !== title || item.selectedSize !== selectedSize)
      );

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
}
