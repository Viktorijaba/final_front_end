import React from 'react';
import useStore from '../store/main';

const IconShop = () => {
    const { icons, spendMoney } = useStore((state) => state);

    return (
        <div style={{ textAlign: 'center' }}>
            {icons.map((icon) => (
                <div key={icon.id} style={{ display: 'inline-block', margin: '10px' }}>
                    <span style={{ fontSize: '40px' }}>{icon.emoji}</span>
                    <p>Price: {icon.price}</p>
                    <button onClick={() => spendMoney(icon.price, icon)}>Buy</button>
                </div>
            ))}
        </div>
    );
};

export default IconShop;
