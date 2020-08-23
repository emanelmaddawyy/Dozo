import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

class CategoriesHeader extends Component {
  render() {
    return this.props.categories.map(category => {
      return (
        <div>
          <h1>{category.title}</h1>
          {category.subCategories.map(subCategory => {
            return (
              <h2>{subCategory.title}</h2>
            );
          })}
        </div>
      );
    });
  }
}

const mapStateToProps = (store) => {
  return {
    categories: store.categories
  }
}

export default connect(mapStateToProps)(CategoriesHeader);