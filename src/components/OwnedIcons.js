import React from 'react';
import useStore from '../store/main';

const OwnedIcons = () => {
    const ownedIcons = useStore((state) => state.ownedIcons);

    return (
        <div>
            <h1>Own icons: {ownedIcons.length}</h1>
            <div>
                {ownedIcons.map((icon, index) => (
                    <span key={index} style={{ fontSize: '40px', margin: '5px' }}>
                        {icon.emoji}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default OwnedIcons;
