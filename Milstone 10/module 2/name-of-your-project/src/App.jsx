import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleForm=(e)=>{
    e.preventDefault();

    const form = event.target;
    const nam= event.target.nam.vlaue;
    const email= form.email.value;
    const user= {email};
    console.log(user);
    

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })
  }

  return (
    <>
      <h1>Simple database</h1>
      <form className='my-14 space-y-4' onSubmit={handleForm}>
        <input  name="nam" placeholder='name' className='border p-3' />
        <br />
        <input type="email" name='email' placeholder='email' className='border p-3'/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
