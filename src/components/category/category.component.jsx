import React from 'react';

import CustomLink from '../custom-link/custom-link.component';

import './category.styles.scss';

const Category = ({ imgSrc, categoryTxt }) => (
  <div className="Category col-sm-12 col-md-6">
    <img src={imgSrc} alt={categoryTxt} />
    <CustomLink>{categoryTxt}</CustomLink>
  </div>
);

export default Category;
