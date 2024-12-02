import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaderInfo = useLoaderData();
    const [users,setusers]=useState(loaderInfo);
    const handleDelete=(id)=>{
        fetch(`http://localhost:5001/users/${id}`,{
            method:'DELETE',
        })
        .then(res=> res.json())
        .then(data=>{
            alert('Deleted succefully!');
            const newUserCount = users.filter(user => user._id !== id)
            setusers(newUserCount)
        })

    }
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        <h1 className="text-center my-10 text-2xl">
          User length :{users.length}
        </h1>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Sing up time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user,idx) => <tr key={idx}>
                    <th>{idx+1}</th>
                    <td>{user.Name}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td className='space-x-2'>
                        <button className='btn btn-accent'>Edit</button>
                        <button className='btn btn-accent'
                        onClick={()=>handleDelete(user._id)}
                        >X</button>
                    </td>
                  </tr>
                  )
              }
              
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;