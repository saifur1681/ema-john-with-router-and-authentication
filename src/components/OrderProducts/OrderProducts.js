import React from 'react';

const OrderProducts = (props) => {
    const { name, quantity, price, key } = props.product;
    const { handleRemove } = props;
    return (

        <div>
            <h2 className="product-name">{name}</h2>
            <h2>Quantity: {quantity}</h2>
            <h5>$ {price}</h5>
            <button
                onClick={() => handleRemove(key)}
                className="btn-regular">remove</button>
        </div>
    );
};

export default OrderProducts;