import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage'
import { Provider } from 'react-redux';
import store from './store/store'
import './i18n';
import { withTranslation } from 'react-i18next';

class App extends Component {
  componentDidMount() {
    // set the app language from the reducx store
    const { i18n } = this.props;
    i18n.changeLanguage(store.lang || 'ar');
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path='/' exact component={HomePage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withTranslation()(App);