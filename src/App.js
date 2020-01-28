import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component {
 


  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         this.props.setCurrentUser({
           id: snapShot.id,
           ...snapShot.data()
         });
       
        });
      }
      else{
        setCurrentUser(userAuth);
      }
      //this.setState({currentUser: user});
      //console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
