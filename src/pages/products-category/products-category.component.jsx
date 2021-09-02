import React, { Component } from 'react';
import axios from 'axios';

import ProductItem from '../../components/products-item/products-item.component';

import './products-category.styles.scss';

class ProductsCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { productsCategory: [] };
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
  }
  componentDidMount() {
    this.getCategoryProducts();
  }
  async getCategoryProducts() {
    const request = this.props.match.params.products;
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${request}`
    );
    const result = response.data;
    this.setState({ productsCategory: result });
  }
  render() {
    return (
      <div className="ProductsCategory container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {this.state.productsCategory.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsCategory;
