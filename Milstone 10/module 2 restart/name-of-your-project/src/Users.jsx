import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    const handleDelete=(_id)=>{
        console.log("delete id",_id);
        fetch(`http://localhost:5002/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        
    }    
return (
        <div>
            <h1>User length :{users.length}</h1>
            <div>
                {
                   users.map((user)=> <div><p>Name : {user.name}</p>
                   <p>Email : {user.email}</p>
                   <p>ID : {user._id}</p> 
                   <button 
                   onClick={()=>handleDelete(user._id)}
                   >X</button>
                   </div>)
                }
                
            </div>
        </div>
    );
};

export default Users;