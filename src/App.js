import './App.css';
import { useState } from "react"
import Counter from './Counter'; 
import Cat from "./Cat"


function App() {

    const [value, setchenger] = useState(0);
    const [toggle, setToggel] = useState(true);
   
    const buttonCheng = () => { 
      setToggel ((prev_value) => !prev_value);

  }; 


  return(
    <div className='App'>
       <button onClick={buttonCheng} >
         {toggle ? " hedi " : " show "} Cat </button>  
          {toggle && <Cat value={value} /> }
       <button onClick={() => setchenger(10)}>click</button>
        </div>
   );
}


export default App;
