import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container" >
            <div>
                <h2 className="form-title" style={{ textAlign: 'center' }} >Log in</h2>
                <div className="input-field" >
                    <label htmlFor="email"> Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="input-field" >
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <input className="card-button" type="button" value="Log in" />
                <div className="card-link-container" >
                    <p >New to Ema John? <Link className="card-link-style" to="/signup" >Create new Account</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;