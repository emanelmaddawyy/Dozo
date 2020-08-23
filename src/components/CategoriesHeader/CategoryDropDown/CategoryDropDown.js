import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav } from 'reactstrap';
import './CategoryDropDown.scss'

class CategoryDropDown extends Component {
  state = {
    isOpen: false
  }

  toggle() {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const category = this.props.category;

    return (
      <Dropdown className="controlDrop" addonType="append" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
        <DropdownToggle caret> {category.title}</DropdownToggle>
        <DropdownMenu>
          {category.subCategories.map(subCategory => {
            return (
              <DropdownItem key={subCategory.id}>{subCategory.title}</DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default CategoryDropDown;