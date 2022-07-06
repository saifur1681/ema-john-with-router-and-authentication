import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderProducts from '../OrderProducts/OrderProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
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

                <Cart cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default OrderReview;