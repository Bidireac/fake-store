import { createSelector } from 'reselect';

const selectBasket = (state) => state.basket;

export const selectBasketItems = createSelector(
  [selectBasket],
  (basket) => basket.basketItems
);

export const selectCartItemsCount = createSelector(
  [selectBasketItems],
  (basketItems) =>
    basketItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectBasketItems],
  (basketItems) => {
    const price = basketItems.reduce(
      (accumulatedTotal, basketItem) =>
        accumulatedTotal + basketItem.price * basketItem.quantity,
      0
    );
    return price.toFixed(2);
  }
);
