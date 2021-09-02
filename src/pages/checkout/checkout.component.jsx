import React from 'react';
import { connect } from 'react-redux';
import {
  selectBasketItems,
  selectCartTotal,
} from '../../components/redux/basket/basket.selectors';
import { createStructuredSelector } from 'reselect';
import { clearCartItems } from '../../components/redux/basket/basket.actions';

import CheckoutProduct from '../../components/checkout-product/checkout-product.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ basketItems, total, clearItems }) => (
  <div className="CheckoutPage">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {basketItems.map((basketItem) => (
      <CheckoutProduct key={basketItem.id} basketItem={basketItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => clearItems()}
      >
        Clear Items
      </button>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  basketItems: selectBasketItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearItems: () => dispatch(clearCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
