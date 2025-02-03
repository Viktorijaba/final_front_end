import React from 'react';
import useStore from '../store/main';

const MoneyComponent = () => {
    const money = useStore((state) => state.money);

    return (
        <div>
            <h1>Money: {money}</h1>
        </div>
    );
};

export default MoneyComponent;
