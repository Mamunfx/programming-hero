import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleForm=(e)=>{
    e.preventDefault();

    const form =event.target;
    const name= form.name.vlaue;
    const email= form.email.value;
    const user= {name,email};
    console.log(user);
  }

  return (
    <>
      <h1>Simple database</h1>
      <form className='my-14 space-y-4' onSubmit={handleForm}>
        <input type="text" name='name' placeholder='name' className='border p-3' />
        <br />
        <input type="email" name='email' placeholder='email' className='border p-3'/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
