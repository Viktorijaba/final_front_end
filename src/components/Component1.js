import React from 'react';
import useStore from '../store/main';

const Component1 = () => {
    const color = useStore((state) => state.color);

    return (
        <div style={{ backgroundColor: color, padding: '20px', borderRadius: '8px', textAlign: 'center', color: '#fff' }}>
            <h1>Selected Color: {color}</h1>
        </div>
    );
};

export default Component1;
