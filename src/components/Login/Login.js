import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserLogin = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className="login-container" >
            <form onSubmit={handleUserLogin} >
                <h2 className="form-title" style={{ textAlign: 'center' }} >Log in</h2>
                <div className="input-field" >
                    <label htmlFor="email"> Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" required />
                </div>
                <div className="input-field" >
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" required />
                </div>
                {
                    loading && <p>Loading...</p>
                }
                <p style={{ color: 'red' }} >{error?.message}</p>
                <input className="card-button" type="submit" value="Log in" />
                <div className="card-link-container" >
                    <p >New to Ema John? <Link className="card-link-style" to="/signup" >Create new Account</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Login;