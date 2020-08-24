import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Container } from 'reactstrap';
import CategoryDropDown from './CategoryDropDown/CategoryDropDown';
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
    return (<div className="centerHeader">
    <Container> 
      <Nav className="categoyHeader">
      {this.props.categories.map(category => {
        return (
          <CategoryDropDown key={category.id} category={category} className="controlDrop"/>
        );
      })}
    </Nav>
    </Container>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    categories: store.categoriesReducer.categories
  }
}

export default connect(mapStateToProps)(CategoriesHeader);