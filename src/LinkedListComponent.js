// src/LinkedListComponent.js
import React, { useState } from 'react';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
    }

    toArray() {
        const elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        return elements;
    }
}

const LinkedListComponent = () => {
    const [list] = useState(new LinkedList());
    const [elements, setElements] = useState([]);

    const addToList = (value) => {
        list.append(value);
        setElements(list.toArray());
    };

    return (
        <div>
            <h3>Linked List</h3>
            <button onClick={() => addToList(Math.floor(Math.random() * 100))}>Add Random Number</button>
            <div>{elements.join(' -> ')}</div>
        </div>
    );
};

export default LinkedListComponent;
