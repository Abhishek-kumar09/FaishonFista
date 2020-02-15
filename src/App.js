import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homePage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shopPage/shop'

function App() {
  return (
    <Switch>
      <Route path="/homepage" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
