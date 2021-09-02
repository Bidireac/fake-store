import React from 'react';
import './products-item.styles.scss';

import { connect } from 'react-redux';
import { addItem } from '../redux/basket/basket.actions';

const ProductItem = ({ product, addItem }) => {
  const { image, price, title } = product;
  return (
    <div className="ProductItem col">
      <div className="card">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <p className="card-text">
            ${price} <i className="fas fa-tags"></i>
          </p>
          <h5 className="card-title">{title}</h5>
          <div className="ProductItem-cart">
            <button
              onClick={() => addItem(product)}
              type="button"
              className="btn btn-outline-success"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
