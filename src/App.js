import React, { Component } from 'react';
import { Switch,  BrowserRouter as Router ,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home'
import { Provider } from 'react-redux';
import store from './store/store'


class App extends Component {
  
render() {

  return (
   <Provider store={store}>
    
      <Router>
          <div className="App">
          <Switch>
               <Route path='/' exact component={HomePage}/>
          </Switch>
          </div>
        </Router>
   </Provider>
       

  );
  
}
}
export default App;
