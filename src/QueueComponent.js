// src/QueueComponent.js
import React, { useState } from 'react';

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }

    printQueue() {
        return this.items.join(', ');
    }
}

const QueueComponent = () => {
    const [queue] = useState(new Queue());
    const [elements, setElements] = useState([]);

    const enqueueToQueue = (value) => {
        queue.enqueue(value);
        setElements([...queue.items]);
    };

    const dequeueFromQueue = () => {
        queue.dequeue();
        setElements([...queue.items]);
    };

    return (
        <div>
            <h3>Queue</h3>
            <button onClick={() => enqueueToQueue(Math.floor(Math.random() * 100))}>Enqueue Random Number</button>
            <button onClick={dequeueFromQueue}>Dequeue</button>
            <div>{elements.join(', ')}</div>
        </div>
    );
};

export default QueueComponent;
