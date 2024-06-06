// src/StackComponent.js
import React, { useState } from 'react';

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    printStack() {
        return this.items.join(', ');
    }
}

const StackComponent = () => {
    const [stack] = useState(new Stack());
    const [elements, setElements] = useState([]);

    const pushToStack = (value) => {
        stack.push(value);
        setElements([...stack.items]);
    };

    const popFromStack = () => {
        stack.pop();
        setElements([...stack.items]);
    };

    return (
        <div>
            <h3>Stack</h3>
            <button onClick={() => pushToStack(Math.floor(Math.random() * 100))}>Push Random Number</button>
            <button onClick={popFromStack}>Pop</button>
            <div>{elements.join(', ')}</div>
        </div>
    );
};

export default StackComponent;
