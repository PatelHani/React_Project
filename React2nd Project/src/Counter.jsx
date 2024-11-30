import React, { useState } from 'react';
import './App.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);  

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(count - 1, 0));
  const Reset = () => {
    useCounter(0)
  }

  return (
    <div className="counter-container">
    <h2 style={{color:'black'}}>Counter:</h2>
      <h1 className="counter-display">{count}</h1>
      <div className="button-container">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <button className="button" onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
