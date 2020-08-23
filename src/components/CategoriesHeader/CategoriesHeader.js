import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav } from 'reactstrap';
import { connect } from 'react-redux';
import './categoriesHeader.scss'

class CategoriesHeader extends Component {
  state = {
    isOpen1: false
  }
  toggle1() {
    this.setState({ ...this.state, isOpen1: !this.state.isOpen1 });
  }

  render() {
    return (<Nav className="categoyHeader">
      {this.props.categories.map(category => {
        return (
          <div>
            <Dropdown className="controlDrop" addonType="append" isOpen={this.state.isOpen1} toggle={() => this.toggle1()}>
              <DropdownToggle caret> {category.title}</DropdownToggle>
              <DropdownMenu>
                {category.subCategories.map(subCategory => {
                  return (
                    <DropdownItem key={subCategory.id}>{subCategory.title}</DropdownItem>
                  );
                })}
              </DropdownMenu>
              </Dropdown>
        </div>
      );
     
    })}
   </Nav>
        )

      }
}

const mapStateToProps = (store) => {
  return {
        categories: store.categories
  }
}

export default connect(mapStateToProps)(CategoriesHeader);