import './App.css';
import { useState } from "react"
import Counter from './Counter'; 


function App() {

  
    const [value, setchenger] = useState(true)
   
    const buttonCheng = () => { 
     setchenger ((prev_value) => !prev_value);

  }; 


  return(
    <div className='App'>
       <button onClick={buttonCheng} >
        Counter
         {value ? " hedi " : " show "} 
        </button>
     { value && <Counter /> }
      
        </div>
   );
}


export default App;
