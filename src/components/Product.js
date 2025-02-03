import React from "react";

const Product = ({ item, addToCart }) => {
    return (
        <div className="product-card">
            <img className="product-image" src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default Product;