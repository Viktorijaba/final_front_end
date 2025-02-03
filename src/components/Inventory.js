import React from "react";

const Inventory = ({ handleBuy }) => {
    const items = [
        { type: "potion", name: "Potion (Heal 50 HP)", price: 30 },
        { type: "doubleDamage", name: "Double Damage", price: 50 },
        { type: "hitAll", name: "Hit All Monsters", price: 70 },
    ];

    return (
        <div className="inventory">
            <h2>Inventory</h2>
            {items.map((item, index) => (
                <div key={index} className="inventory-item">
                    <p>{item.name}</p>
                    <button onClick={() => handleBuy(item)}>Buy (${item.price})</button>
                </div>
            ))}
        </div>
    );
};

export default Inventory;
