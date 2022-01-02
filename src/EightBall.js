import React, { useState } from 'react';
import messages from './messages';
import './EightBall.css';


const EightBall = () => {
    const [message, setMessage] = useState('Think of a question');
    const [color, setColor] = useState('black');

    const tellFortune = () => {
        const idx = Math.floor(Math.random() * messages.length);
        setMessage(messages[idx].msg);
        setColor(messages[idx].color);
    };

    const reset = () => {
        setMessage('Think of a question');
        setColor('black');
    };

    return (
        <>
            <div onClick={ tellFortune } className='EightBall' style={{ backgroundColor: color }}>
                <h1>{ message }</h1>
            </div>

            <button onClick={ reset }>Reset</button>
        </>
    );
};


export default EightBall;