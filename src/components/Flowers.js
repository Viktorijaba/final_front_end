import React from "react";

const Flowers = ({ seedling, handleBuy }) => {
    return (
        <div className="allSeedlings">
            <span style={{ fontSize: "2rem" }}>{seedling.emoji}</span>
            <p>Price: ${seedling.price}</p>
            <button onClick={() => handleBuy(seedling)}>Buy</button>
        </div>
    );
};

export default Flowers;
