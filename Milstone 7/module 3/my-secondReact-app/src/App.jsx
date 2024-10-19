import { useState } from 'react'
import './App.css'
import StateManage from './StateManage'

function App() {

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
      <StateManage></StateManage>
    </>
  )
}

export default App
