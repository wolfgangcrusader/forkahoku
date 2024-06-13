// src/components/Card.js
import React, { useState } from 'react';
import './card.css';

const Card = ({ message }) => {
    const [revealed, setRevealed] = useState(false);

    const handleClick = () => {
        setRevealed(!revealed);
    };

    return (
        <div className={`card ${revealed ? 'revealed' : ''}`} onClick={handleClick}>
            {revealed ? <p>{message}</p> : <p>Click to Reveal</p>}
        </div>
    );
};

export default Card;

