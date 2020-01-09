import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import './App.css';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () =>(
  <div>
    This is HATS Page.
  </div>
)

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/sign-in' component={SignInSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
