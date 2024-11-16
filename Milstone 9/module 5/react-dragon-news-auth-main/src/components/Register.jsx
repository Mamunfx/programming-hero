import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';


const Register = () => {
  
  const {creatAccount}=useContext(AuthContext);
  const handleReg=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
        const password=e.target.password.value;
        creatAccount(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log('error',error.message);
        })
  }
    return (
        <div className="flex justify-center items-center mt-12">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <form className="card-body" onSubmit={handleReg}>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" placeholder="Type your name" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Photo Url</span>
             </label>
             <input type="text" placeholder="Photo" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" placeholder="email" name='email' className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" placeholder="password" name='password' className="input input-bordered" required />
             <label className="label">
               <Link to="/AuthLayout">Already have an account ? Singin</Link>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Register</button>
           </div>
         </form>
       </div>
       </div>
    );
};

export default Register;