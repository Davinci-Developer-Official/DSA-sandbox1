// src/ArrayComponent.js
import React, { useState } from 'react';

const ArrayComponent = () => {
    const [array, setArray] = useState([]);

    const addToArray = (value) => {
        setArray([...array, value]);
    };

    const removeFromArray = () => {
        setArray(array.slice(0, -1));
    };

    return (
        <div>
            <h3>Array</h3>
            <button onClick={() => addToArray(Math.floor(Math.random() * 100))}>Add Random Number</button>
            <button onClick={removeFromArray}>Remove Last</button>
            <div>{array.join(', ')}</div>
        </div>
    );
};

export default ArrayComponent;
