import React from "react";

const Player = ({ hp }) => {
    return (
        <div className="player">
            <h2>Player</h2>
            <p>HP: {hp}</p>
            <progress value={hp} max="100"></progress>
        </div>
    );
};

export default Player;
