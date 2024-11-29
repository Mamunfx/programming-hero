import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    
    const Loadusers = useLoaderData();
    const [users,setusers]=useState(Loadusers);
    const handleDelete= (_id) =>{
        console.log("delete id",_id);
        fetch(`http://localhost:5002/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount>0) {
                alert('deleted succefully');
                const remaining= users.filter(user => user._id!==_id);
                setusers(remaining);
            }
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