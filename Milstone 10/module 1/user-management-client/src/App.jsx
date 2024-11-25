import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user, setuser] = useState([]); 
  useEffect(()=>{
    fetch('http://localhost:5000/data')
    .then(res=> res.json())
    .then(data => setuser(data))
  },[])
  
  return (
    <>
      <h1>User Managment system</h1>
      <p>User count is : {user.length}</p>
    </>
  )
}

export default App
