import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user=useLoaderData()
    const handleForm=e=>{
        e.preventDefault();
  const name=e.target.name.value;
  const email=e.target.email.value;
  const updatedUser={name,email}
        
  fetch(`http://localhost:5002/users/${user._id}`,{
    method:"PUT",
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(updatedUser)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  })


    }
    return (
        <div>
            <h1>User details of : {user.name} </h1>
            <form onSubmit={handleForm}>
                <input type="text" name='name' defaultValue={user?.name} />
                <br />
                <input type="email" name='email' defaultValue={user?.email} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateUser;