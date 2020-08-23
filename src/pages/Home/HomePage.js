import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Slider from '../../components/Slider/slider'
import { connect } from 'react-redux';
import { saveCategories } from '../../store/actions/actions';
import { getCategories } from '../../api/data'

class HomePage extends Component {
  async componentDidMount() {
    if (!this.props.categories) {
      const categories = await getCategories();
      this.props.saveCategories(categories);
    }
  }

  render() {
    return this.props.categories ?
      <div>
        <Header />
        <CategoriesHeader />
        <Slider />
      </div>
      : (<h2>Loading...</h2>)
  }
}

const mapStateToProps = (store) => {
  return {
    categories: store.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCategories: (categories) => dispatch(saveCategories(categories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);