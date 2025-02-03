import React from "react";

const Cart = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img className="cart-image" src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
};

export default Cart;
