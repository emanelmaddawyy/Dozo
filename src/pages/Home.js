import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Categories from '../components/categoriesHeader';
import Slider from '../components/Slider/slider'


class HomePage extends Component {
  
render() {

  return (
   
  
        <div className="App">
          <Header/>
          <Categories/>
          <Slider/>
        </div>
      
   

  );
  
}
}
export default HomePage;
