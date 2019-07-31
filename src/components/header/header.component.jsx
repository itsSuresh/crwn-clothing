import React from 'react';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';

const Header = () =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="options" to="/shop">
                shop
            </Link>
            <Link className="options" to="/shop">
                contact
            </Link>
        </div>
    </div>
);

export default Header;