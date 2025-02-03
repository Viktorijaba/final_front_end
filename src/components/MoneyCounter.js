import React from "react";

const MoneyCounter = ({ money }) => {
    return (
        <div className="money-counter">
            <h2>Money: ${money}</h2>
        </div>
    );
};

export default MoneyCounter;
