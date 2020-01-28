import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../styles/header.scss';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header =({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to ='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> 
                :
                <Link className='option' to='/sign-in'>
                SIGN IN
            </Link>
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);