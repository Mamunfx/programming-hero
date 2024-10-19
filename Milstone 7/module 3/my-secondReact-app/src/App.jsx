import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function events() {
    alert('show alert')
  }
  const event2 = () =>{
    alert('show alert 2')
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* event Handling */}
      <button onClick={events}>BUtton1</button>
      <button onClick={event2}>BUtton2</button>      
      <button onClick={()=>{alert('button 3 clicked')}}>BUtton3</button>      
      <button onClick={()=>{event2()}}>BUtton4</button>      

    </>
  )
}

export default App
