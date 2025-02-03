import React from "react";

const DeckInfo = ({ deckId, remaining }) => {
    return (
        <div className="deck-info">
            <p><strong>Deck ID:</strong> {deckId}</p>
            <p><strong>Cards Remaining:</strong> {remaining}</p>
        </div>
    );
};

export default DeckInfo;
