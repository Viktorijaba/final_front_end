import React from 'react';
import useStore from '../store/main';

const Component2 = () => {
    const setColor = useStore((state) => state.setColor);

    const updateColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <button onClick={updateColor}>Change Color</button>
        </div>
    );
};

export default Component2;
