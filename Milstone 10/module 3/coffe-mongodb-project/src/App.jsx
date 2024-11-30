import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

function App() {

  const allcoffee=useLoaderData();


  return (
    <>
      <h1>All coffee</h1>
      <div className='grid grid-cols-3 gap-3'>
      {
        allcoffee.map((coffee)=><Card key={coffee._id} coffee={coffee} ></Card>)
      }
      </div>
    </>
  )
}

export default App
