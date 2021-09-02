import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';
import ProductsPage from './pages/products/products.component';
import SignInSignUpPage from './pages/signin/sign-in-and-sign-up.component';
import ProductsCategory from './pages/products-category/products-category.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './components/redux/user/user.actions';

import './App.css';

import mensclothing from './img/mensclothing.jpg';
import womensclothing from './img/womensclothing.jpg';
import electronics from './img/electronics.jpg';
import jewelery from './img/jewelery.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], products: [] };
    this.getCategories = this.getCategories.bind(this);
    this.getStore = this.getStore.bind(this);
  }
  componentDidMount() {
    this.getCategories();
    this.getStore();
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  async getCategories() {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    const result = response.data;
    const newState = [];
    result.forEach((item, idx) => {
      let imageSrc;
      switch (item) {
        case "men's clothing":
          imageSrc = mensclothing;
          break;
        case "women's clothing":
          imageSrc = womensclothing;
          break;
        case 'electronics':
          imageSrc = electronics;
          break;
        case 'jewelery':
          imageSrc = jewelery;
          break;
      }
      newState.push({
        id: idx,
        text: item,
        img: imageSrc,
      });
    });
    this.setState({ categories: newState });
  }
  async getStore() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const result = response.data;
    this.setState({ products: result });
  }
  render() {
    return (
      <div className="App">
        <Navigation categories={this.state.categories} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage categories={this.state.categories} />}
          />
          <Route
            exact
            path="/products"
            render={() => <ProductsPage products={this.state.products} />}
          />
          <Route
            path="/category/:products"
            render={(otherProps) => <ProductsCategory {...otherProps} />}
          />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
