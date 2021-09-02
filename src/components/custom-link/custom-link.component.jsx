import React from 'react';
import { NavLink } from 'react-router-dom';
import './custom-link.styles.scss';

const CustomLink = ({ children }) => (
  <NavLink to={`/category/${children}`} className="CustomLink">
    {children}
  </NavLink>
);

export default CustomLink;
