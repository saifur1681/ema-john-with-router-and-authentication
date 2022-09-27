import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderProducts from '../OrderProducts/OrderProducts';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    };

    const handlePlaceOrder = () => {
        navigate('/shipment');
        // empty cart.....
        setCart([]);
        // empty localStorage.....
        clearTheCart();
    };

    return (
        <div className="shop-container">
            <div className="product-container" >

                {
                    cart.map(product => <OrderProducts
                        product={product}
                        handleRemove={handleRemove}
                    ></OrderProducts>)
                }

            </div>

            <div className="cart-container">

                <Cart cart={cart}>
                    <button
                        onClick={handlePlaceOrder}
                        className="btn-regular">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;