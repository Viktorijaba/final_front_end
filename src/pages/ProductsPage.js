import React, { useState, useEffect } from "react";
import Product from "../components/Product";

const ProductsPage = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="products-container">
            {products.map((product) => (
                <Product key={product.id} item={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductsPage;
