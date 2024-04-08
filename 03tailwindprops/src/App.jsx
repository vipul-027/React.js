import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj= {
    userName: "vipul",
    age:23
  }
  return (
   <>
      <h1 className='bg-yellow-800 text-black-400  p-4 rounded-xl mb-4'>Tailwind test</h1>
             <Card username="coffeeaurreact" btnText="click me"/>
            
    </>
  )
}

export default App
