export const addItemToBasket = (basketItems, basketItemToAdd) => {
  const existingBasketItem = basketItems.find(
    (product) => product.id === basketItemToAdd.id
  );

  if (existingBasketItem) {
    return basketItems.map((product) =>
      product.id === basketItemToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...basketItems, { ...basketItemToAdd, quantity: 1 }];
};

export const removeItemFromBasket = (basketItems, basketItemToRemove) => {
  const existingBasketItem = basketItems.find(
    (product) => product.id === basketItemToRemove.id
  );

  if (existingBasketItem.quantity === 1) {
    return basketItems.filter(
      (product) => product.id !== basketItemToRemove.id
    );
  }

  return basketItems.map((product) =>
    product.id === basketItemToRemove.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};
