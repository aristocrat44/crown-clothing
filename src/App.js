import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';



class App extends React.Component {
  state={
    currentUser: null
  }


  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/sign-in' component={SignInSignUpPage}/>
        </Switch>
    </div>
  );
}
}

export default App;
