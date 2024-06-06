// src/App.js
import React from 'react';
import './App.css';
import SignUpForm from './SignUpForm';
import ArrayComponent from './ArrayComponent';
import LinkedListComponent from './LinkedListComponent';
import StackComponent from './StackComponent';
import QueueComponent from './QueueComponent';
import AptitudeComponent from './AptitudeComponent';
import GATEComponent from './GATEComponent';
import PlacementComponent from './PlacementComponent';

function App() {
    return (
        <div className="App">
            <h1>Preparation Portal</h1>
            <SignUpForm initialUsername="JohnDoe" initialEmail="john@example.com" initialPassword="password123" />
            <div className="preparation-sections">
                <AptitudeComponent />
                <GATEComponent />
                <PlacementComponent />
            </div>
            <div className="data-structures">
                <ArrayComponent />
                <LinkedListComponent />
                <StackComponent />
                <QueueComponent />
            </div>
        </div>
    );
}

export default App;

