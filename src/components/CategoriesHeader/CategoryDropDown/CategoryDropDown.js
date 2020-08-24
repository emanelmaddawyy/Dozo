import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row } from 'reactstrap';
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
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
        <DropdownToggle caret> {category.title}</DropdownToggle>
        <DropdownMenu>
          <Row>
            {category.subCategories.map(subCategory => {
              return (
                <div className="col-md-3 col-sm-6 col-xs-6 nav-block">
                  <DropdownItem key={subCategory.id}>{subCategory.title}</DropdownItem>
                </div>
              );
            })}
          </Row>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default CategoryDropDown;