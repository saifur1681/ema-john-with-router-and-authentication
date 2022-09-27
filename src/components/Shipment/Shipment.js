import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [user] = useAuthState(auth)

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handleNumberBlur = event => {
        setNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, address, number };
        console.log(shipping);
    }

    return (
        <div className="login-container" >
            <form onSubmit={handleCreateUser} >
                <h2 className="form-title" style={{ textAlign: 'center' }} >Shipment Form</h2>
                <div className="input-field" >
                    <label htmlFor="name"> Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" required />
                </div>
                <div className="input-field" >
                    <label htmlFor="email"> Email</label>
                    <input value={user?.email} readonly type="email" name="email" required />
                </div>
                <div className="input-field" >
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" required />
                </div>
                <div className="input-field" >
                    <label htmlFor="Phone">Phone</label>
                    <input onBlur={handleNumberBlur} type="number" id="phone" name="phone" required />
                </div>
                <input className="card-button" type="submit" value="Allow Shipping" />
            </form>
        </div>
    );
};

export default Shipment;