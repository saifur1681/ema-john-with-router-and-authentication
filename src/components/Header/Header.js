import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>

                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orderReview">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user ?
                        <button onClick={handleLogout} >Logout</button>
                        :
                        <Link to="/login" >Log in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;