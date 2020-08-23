import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { saveCategories } from '../../store/actions/actions';
import { getCategories } from '../../api/data'


class CategoriesHeader extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories: categories
    })
  }

  render() {
    return (
      <h1>{this.props.categories}</h1>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    categories: store.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCategories: () => dispatch(saveCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesHeader);