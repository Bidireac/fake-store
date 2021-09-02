import React from 'react';
import { NavLink } from 'react-router-dom';

import './contact.styles.scss';

const ContactPage = () => (
  <div className="ContactPage">
    <p className="display-1">Contact Us</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa,
      reiciendis doloremque veniam minima distinctio quas optio tempora dolore
      est consectetur! Cum error, inventore optio reiciendis, tempore cumque
      nihil, ipsa rem aliquid similique voluptatibus dolorem sit officia
      provident nulla at commodi quidem animi et? Dicta earum sint quam expedita
      illo.
    </p>
    <p className="display-4">Don't hesitate to contact us:</p>
    <NavLink to="/signin" className="nav-link">
      <i className="fab fa-twitter"></i>
      twitter.com
    </NavLink>
    <NavLink to="/signin" className="nav-link">
      <i className="fab fa-facebook"></i>
      facebook.com
    </NavLink>
    <NavLink to="/signin" className="nav-link">
      <i className="fab fa-instagram"></i>
      instagram.com
    </NavLink>
  </div>
);

export default ContactPage;
