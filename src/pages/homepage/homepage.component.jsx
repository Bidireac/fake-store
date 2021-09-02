import React from 'react';

import Category from '../../components/category/category.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage container">
        <div className="HomePage-row row">
          {this.props.categories.map((category) => (
            <Category
              key={category.id}
              imgSrc={category.img}
              categoryTxt={category.text}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default HomePage;
