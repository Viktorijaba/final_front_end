import React from "react";

const LastCard = ({ card, drawCard, reshuffle }) => {
    return (
        <div className="last-card">
            <h3>Last Card Drawn</h3>
            {card ? (
                <div>
                    <img src={card.image} alt={card.code} />
                    <p>{card.value} of {card.suit}</p>
                </div>
            ) : (
                <p>No card drawn yet!</p>
            )}
            <button onClick={drawCard}>Draw Card</button>
            <button onClick={reshuffle}>Reshuffle Deck</button>
        </div>
    );
};

export default LastCard;
