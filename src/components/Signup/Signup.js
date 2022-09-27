import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {  useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError("password atlist 6 character long")
            return;
        }
        if (password !== confirmPassword) {
            setError("your password didn't match")
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className="login-container" >
            <form onSubmit={handleCreateUser} >
                <h2 className="form-title" style={{ textAlign: 'center' }} >Sign Up</h2>
                <div className="input-field" >
                    <label htmlFor="email"> Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" required />
                </div>
                <div className="input-field" >
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" required />
                </div>
                <div className="input-field" >
                    <label htmlFor="confirm-Password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input className="card-button" type="submit" value="Log in" />
                <div className="card-link-container" >
                    <p >Already have an Accout? <Link className="card-link-style" to="/login" >Log in</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;