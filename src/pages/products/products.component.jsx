import React, { Component } from 'react';
import ProductItem from '../../components/products-item/products-item.component';
import axios from 'axios';

import './products.styles.scss';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getStore = this.getStore.bind(this);
  }
  async getStore() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const result = response.data;
    this.setState({ products: result });
  }
  componentDidMount() {
    this.getStore();
  }
  render() {
    return (
      <div className="ProductsPage container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {this.state.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}
export default ProductsPage;
