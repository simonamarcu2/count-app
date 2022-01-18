import './App.css';
import Button from './Button';
import React, { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };
  
  let decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className='app'>
      <div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount}/>
            <div class='count'>
              <h1>{count}</h1>
            </div>
          <Button title={"+"} action={incrementCount}/>
        </div>
      </div>
    </div>
  );
};
