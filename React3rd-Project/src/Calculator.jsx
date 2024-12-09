import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} disabled />
        </div>
        <div className="buttons">
          <button className="button" onClick={() => handleClear()}>C</button>
          <button className="button" onClick={() => handleClick("/")}>/</button>
          <button className="button" onClick={() => handleClick("*")}>*</button>
          <button className="button" onClick={() => handleClick("-")}>-</button>
          <button className="button" onClick={() => handleClick("7")}>7</button>
          <button className="button" onClick={() => handleClick("8")}>8</button>
          <button className="button" onClick={() => handleClick("9")}>9</button>
          <button className="button" onClick={() => handleClick("+")}>+</button>
          <button className="button" onClick={() => handleClick("4")}>4</button>
          <button className="button" onClick={() => handleClick("5")}>5</button>
          <button className="button" onClick={() => handleClick("6")}>6</button>
          <button className="button" onClick={() => handleClick(".")}>.</button>
          <button className="button" onClick={() => handleClick("1")}>1</button>
          <button className="button" onClick={() => handleClick("2")}>2</button>
          <button className="button" onClick={() => handleClick("3")}>3</button>
          <button className="button" onClick={handleEvaluate}>=</button>
          <button className="button zero" onClick={() => handleClick("0")}>0</button>
          <button className="button" onClick={() => handleClear('clear')} >AC</button>
          
          
          

        </div>
      </div>
    </div>
  );
}

export default App;
