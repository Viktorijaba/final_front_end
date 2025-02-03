import React from "react";

const CardHistory = ({ history }) => {
    return (
        <div className="card-history">
            <h3>Card History</h3>
            <div className="history-cards">
                {history.map((card, index) => (
                    <img key={index} src={card.image} alt={card.code} />
                ))}
            </div>
        </div>
    );
};

export default CardHistory;
