import './App.css'

function App() {
  
const handleForm=(e)=>{
  e.preventDefault();
  const name=e.target.name.value;
  const email=e.target.email.value;
  const user={name,email}

  fetch('http://localhost:5002/users',{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    
  })
}
  return (
    <>
      
      <h1>Simple CRUD</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id=""/>
        <br />
        <input type="email" name="email" id=""  />
        <br />
        <input type="submit" value="Add user" />
      </form>
    
    </>
  )
}

export default App
