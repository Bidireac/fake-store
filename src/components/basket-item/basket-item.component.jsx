import React from 'react';
import './basket-item.styles.scss';

const BasketItem = ({ product: { image, price, title, quantity } }) => (
  <div className="basket-item">
    <img src={image} alt={title} />
    <div className="item-details">
      <div className="name">{title}</div>
      <div className="price">
        {quantity} - ${price}
      </div>
    </div>
  </div>
);

export default BasketItem;
