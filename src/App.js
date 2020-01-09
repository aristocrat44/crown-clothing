import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
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
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route paths='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
