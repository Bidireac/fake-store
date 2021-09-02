import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectBasketItems } from '../redux/basket/basket.selectors';
import { createStructuredSelector } from 'reselect';

import BasketItem from '../basket-item/basket-item.component';

import './basket-dropdown.styles.scss';

class Basket extends Component {
  render() {
    const { basketItems } = this.props;
    return (
      <div className="Basket">
        <div className="basket-items">
          {basketItems.map((basketItem) => (
            <BasketItem key={basketItem.id} product={basketItem} />
          ))}
        </div>
        <NavLink to="/checkout" className="btn btn-dark">
          Go to Checkout
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  basketItems: selectBasketItems,
});

export default connect(mapStateToProps)(Basket);
