import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cart, removeFromCart }) => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart-container">
            <div className="cart-total">
                <h3>Total Price: <span>${totalPrice.toFixed(2)}</span></h3>
            </div>
            {cart.map((item) => (
                <Cart key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
        </div>
    );
};

export default CartPage;
