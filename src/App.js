import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homePage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shopPage/shop'
import Header from './components/header/header.component'

import { connect } from 'react-redux';

import SignInform from './components/SignInSignOutForm/signIn.component'
import { auth } from './firebase/firebase.config';
import { currentUser } from './redux/user/user.actions';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.setCurrentUser(user)      
      console.log(user);      
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/signIn' component={SignInform} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={ShopPage} />
        </Switch>
        {/* <footer>{(this.state.currentUser != null) ? this.state.currentUser.displayName : "No user Found"}</footer> */}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);