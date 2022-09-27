import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>

                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orderReview">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <Link to="/login" >Log in</Link>
            </nav>
        </div>
    );
};

export default Header;