import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user, setuser] = useState([]); 
  useEffect(()=>{
    fetch('http://localhost:5000/data')
    .then(res=> res.json())
    .then(data => setuser(data))
  },[])

  const handleForm=(e)=>{
    e.preventDefault();
    const form = event.target;
    const author =form.name.value;
    const title =form.title.value;
    const user={author,title};
    
    fetch('http://localhost:5000/data',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
  }
  
  return (
    <>
      <h1>User Managment system</h1>
      <p>User count is : {user.length}</p>

      <form action="" onSubmit={handleForm}>
        <input type="text" name="name" id="" />
        <br />
        <input type="text" name="title" id="" />
        <br />
        <button> Submit</button>
      </form>
    </>
  )
}

export default App
