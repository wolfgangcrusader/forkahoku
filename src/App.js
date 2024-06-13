// src/App.js
import React from 'react';
import Data from './data.json'
import Card from './card';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>100 Things I Love About Kahoku</h1>
            <p>a gift for my morning star of paradise</p>
            <div className="card-container">
                {Data.map((item, index) => (
                    <Card key={index} message={item.message} />
                ))}
            </div>
        </div>
    );
};

export default App;
