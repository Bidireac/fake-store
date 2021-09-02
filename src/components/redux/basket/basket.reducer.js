import { BaksetActionTypes } from './basket.types';
import { addItemToBasket, removeItemFromBasket } from './basket.utils';

const INITIAL_STATE = {
  basketItems: [],
};

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BaksetActionTypes.ADD_ITEM:
      return {
        ...state,
        basketItems: addItemToBasket(state.basketItems, action.payload),
      };
    case BaksetActionTypes.REMOVE_ITEM:
      return {
        ...state,
        basketItems: removeItemFromBasket(state.basketItems, action.payload),
      };
    case BaksetActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (basketItem) => basketItem.id !== action.payload.id
        ),
      };
    case BaksetActionTypes.CLEAR_CART_ITEMS:
      return {
        ...state,
        basketItems: [],
      };
    default:
      return state;
  }
};

export default basketReducer;
