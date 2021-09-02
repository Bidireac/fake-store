import { BaksetActionTypes } from './basket.types';

export const addItem = (item) => ({
  type: BaksetActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: BaksetActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: BaksetActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCartItems = () => ({
  type: BaksetActionTypes.CLEAR_CART_ITEMS,
});
