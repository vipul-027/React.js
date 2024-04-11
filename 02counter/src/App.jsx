import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [counter, setCounter]=useState(0) // set counter is the method.

  //let counter=0;
    
   let addValue=()=>{
  //  counter=counter+1;
  if(counter<=20){
    setCounter(counter+1);
    console.log("clicked", counter);
  }
 
   };

   let removeValue=()=>{
     if(counter>=0){
      console.log("removed", counter);
      setCounter(counter-1);
     }
   }

  return (
    <>
      <h1>Coffee aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button  
       onClick={addValue}
      >Add {counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove {counter}</button>


      <p>footer {counter}</p>
    </>
  )
}

export default App
// read this article :- https://github.com/acdlite/react-fiber-architecture

