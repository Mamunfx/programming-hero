import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider/Authprovider";
import { useContext } from "react";

const Login = () => {

  const {signInUser}=useContext(AuthContext);
  const handlesingin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
        signInUser(email,password)
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
      <form className="card-body" onSubmit={handlesingin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <Link to="/AuthLayout/register">Dont have an account ? Register</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
