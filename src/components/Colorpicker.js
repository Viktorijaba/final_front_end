import React from "react";

const Colorpicker = ({ card, updateCardColor }) => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0F033", "#F033F0"]; // List of predefined colors

    const handleColorChange = (color) => {
        updateCardColor(card.id, color); // Update the color of the card
    };

    return (
        <div
            className="card"
            style={{
                backgroundColor: card.color
            }}
        >
            <p>Card {card.id}</p>
            <div className="color-options">
                {colors.map((color) => (
                    <div
                        key={color}
                        className="color-swatch"
                        style={{
                            backgroundColor: color
                        }}
                        onClick={() => handleColorChange(color)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Colorpicker;
