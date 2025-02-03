import React from "react";

const Watering = ({ plant, onWater, onSell }) => {
    return (
        <div className="garden-plant">
            <span style={{ fontSize: "2rem" }}>
                {plant.progress === 100 ? "🌸" : plant.emoji}
            </span>

            {plant.progress < 100 ? (
                <div>
                    <progress value={plant.progress} max="100"></progress>
                    <button onClick={onWater}>Water</button>
                </div>
            ) : (
                <div>
                    <p>Price: ${plant.price}</p>
                    <button onClick={onSell}>Sell</button>
                </div>
            )}
        </div>
    );
};

export default Watering;
