import React from 'react';
import { selectCartItemsCount } from '../redux/basket/basket.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './basket-icon.styles.scss';

const BasketIcon = ({ itemCount }) => (
  <span className="BasketIcon">
    <span>{itemCount}</span>
    <i className="fas fa-shopping-basket"></i>
  </span>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(BasketIcon);
