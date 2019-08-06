import React from 'react';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

const Header = ({currentUser}) =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                shop
            </Link>
            <Link className="option" to="/shop">
                contact
            </Link>
                {
                    currentUser ?
                        <div className="option" onClick={()=>auth.signOut()}> sign out </div>
                        :
                        <Link className='option' to="/signin">signin</Link>
                }
        </div>
    </div>
);

const mapStateToProps = state =>({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);