import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Cat></Cat>
    </>
  )
}

function Cat() {
  let catName=12;
  let obj ={names:12 , age:34}
  return(
    <h2>Cat is the national animal of animosiua ! and {catName} 
    and total students are {obj.names} and age {obj.age}
    </h2>
  )
}

function CssWithClassName() {

  return (
    <h3>Dont worry it will not take a long</h3>,
    <p>Name:</p>,
    <p>Age:</p>
  )
}
export default App
