import React from "react";

const Monster = ({ monster, onSelect, isSelected }) => {

    return (
        <div
            className={`monster-selection ${isSelected ? "selected" : ""}`}
            onClick={onSelect}
        >
            <span style={{ fontSize: "2rem" }}>{monster.emoji}</span>
            <p>Damage: {monster.damage}</p>
            <p>HP: {monster.hp}</p>
        </div>
    );
};

export default Monster;