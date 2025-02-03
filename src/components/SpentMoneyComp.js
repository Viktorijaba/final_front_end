import React from 'react';
import useStore from '../store/main';

const SpentMoneyComp = () => {
    const spentMoney = useStore((state) => state.spentMoney);

    return (
        <div>
            <h1>Money spent: {spentMoney}</h1>
        </div>
    );
};

export default SpentMoneyComp;
