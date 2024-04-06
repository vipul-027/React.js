import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=0;
    
   const addValue=()=>{
    console.log("clicked", counter);
    counter=counter+1;
   }

  return (
    <>
      <h1>Coffee aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
       onClick={addValue}
      >Add {counter}</button>
      <br/>
      <button>Remove {counter}</button>
    </>
  )
}

export default App
