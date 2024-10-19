import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewFile from './newFile'
import Singer from './Singer'

function App() {
  const singers = [
    {id: 1,  name: 'Dr. Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]
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
      <DynamicWayOfUsingComponent></DynamicWayOfUsingComponent>
      <CssWithClassName></CssWithClassName>
      <CssInsideComponent></CssInsideComponent>
      <ObjProps Nam='OMar' thikana={1339}></ObjProps>
      <ObjProps Nam='kiran' thikana={12}></ObjProps>
      <ObjProps Nam='yunus' thikana={1210}></ObjProps>
      <ObjProps Nam='jhinku' ></ObjProps>
      <PriceTag identity='eru' price='93'></PriceTag>
      <PriceTag identity='alphs' price='91'></PriceTag>

      {
        singers.map(singer => <Singer singerInfo={singer}></Singer>)
      }
    </>
  )
}

function DynamicWayOfUsingComponent() {
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
    <div className='sundorBorder'>
    <h3>Dont worry it will not take a long</h3>
    <p>Name:</p>
    <p>Age:</p>
    </div>
  )
}

function CssInsideComponent() {
  const CssInside={
    border:'2px solid yellow',
    backgroundColor: 'green'
  }
  return (
    <div style={CssInside}>
    <h3>Dont worry it will not take a long</h3>
    <p>Name:</p>
    <p>Age:</p>
    </div>
  )
}

function ObjProps({Nam='',thikana=0}) {
  return (
    <div className='sundorBorder'>
    <h3>Dont worry it will not take a long</h3>
    <p>Nam: {Nam}</p>
    <p>Thikana:{thikana}</p>
    </div>
  )
}

function PriceTag({identity,price}) {
  
  return(
    <NewFile nams={identity} price={price}></NewFile>
  )
}

export default App
