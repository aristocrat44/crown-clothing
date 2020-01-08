import React from 'react';
import HomePage from './pages/homepage';
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
      <Route paths='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
