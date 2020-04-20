import React from 'react';
import '../styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CartContainer from './CartContainer';
import ProductContainer from './ProductContainer';
import HomePage from '../components/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/product/:id" component={ProductContainer} />
      </Switch>
    </Router>
  );
};

export default App;
