import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user.selectors';
import BasketIcon from '../basket-icon/basket-icon.component';
import BasketDropdown from '../basket-dropdown/basket-dropdown.component';

import './navigation.styles.scss';

class Navigation extends React.Component {
  render() {
    const refreshPage = () => {
      window.location.reload();
    };
    const { currentUser, categories, history } = this.props;
    return (
      <nav className="Navigation navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <i className="fas fa-frog"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category Dropdown
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {categories.map((category) => (
                    <li>
                      <button
                        onClick={() => {
                          history.push(`/category/${category.text}`);
                          refreshPage();
                        }}
                        className="dropdown-item"
                        key={category.id}
                      >
                        {category.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                {currentUser ? (
                  <NavLink
                    onClick={() => auth.signOut()}
                    to="/"
                    className="nav-link"
                  >
                    Sign Out
                  </NavLink>
                ) : (
                  <NavLink to="/signin" className="nav-link">
                    Sign in
                  </NavLink>
                )}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BasketIcon />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <BasketDropdown />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Navigation));
