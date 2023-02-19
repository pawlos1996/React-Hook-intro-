import React, { useState } from 'react';

const Counter = () =>  { 
  const  [counter, setCounter] = useState(1);

const incrementCounter = () => {
 setCounter ((prevCount) => prevCount + 1 )           // senior way 
};

const decrementCounter = () => {                  
 setCounter ((prevCount) => prevCount - 1)                                 // junior way 
};
 return (<div className = "App">
   <h1>{counter}</h1>
   <button onClick={incrementCounter}>+</button>
   <button onClick={decrementCounter}>-</button>
 </div>
 );
}

export default Counter