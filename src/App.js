import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homePage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shopPage/shop'
import Header from './components/header/header.component'

import SignInform from './components/SignInSignOutForm/signIn.component'
import { auth } from './firebase/firebase.config';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})      
      console.log(user);      
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header CurrentUser = { this.state.currentUser } />
        <Switch>
          <Route exact path='/signIn' component={SignInform} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
        <footer>{(this.state.currentUser) ? this.state.currentUser.displayName : "No user Found"}</footer>
      </div>
    );
  }
}




export default App;