import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Slider from '../../components/Slider/Slider'

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoriesHeader />
        <Slider />
      </div>
    );
  }
}

export default HomePage;