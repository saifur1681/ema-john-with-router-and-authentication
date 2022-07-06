import React from 'react';

const OrderProducts = (props) => {
    const { name, quantity, price, key } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <h3 className="product-name">{name}</h3>
            <h4>Quantity: {quantity}</h4>
            <h5>$ {price}</h5>
            <button
                onClick={() => handleRemove(key)}
                className="btn-regular">remove</button>
        </div>
    );
};

export default OrderProducts;