import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  clearItemFromCart,
} from '../redux/basket/basket.actions';

import './checkout-product.styles.scss';

const CheckoutProduct = ({ basketItem, clearItem, addItem, removeItem }) => {
  const { image, price, title, quantity } = basketItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(basketItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(basketItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(basketItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (product) => dispatch(clearItemFromCart(product)),
  addItem: (product) => dispatch(addItem(product)),
  removeItem: (product) => dispatch(removeItem(product)),
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
