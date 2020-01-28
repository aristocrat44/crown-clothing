import React from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
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
          <Route exact path='/sign-in' 
          render={()=> this.props.currentUser ? (<Redirect to ='/' />): (<SignInSignUpPage/>)}
          />
        </Switch>
    </div>
  );
}
}

const mapStateToProps = ({user}) =>({ //destructured directly to user instead of putting state and doing state.user.currentUser
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
