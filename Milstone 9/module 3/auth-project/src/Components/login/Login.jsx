import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/Authprovider";


const Login = () => {
  const { creatAccount}=useContext(AuthContext);


  const handleForm=(e)=>{
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
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forget password?
                  </a>
                </label>

                  <Link to="Register" className="text-blue-600">Dont have account ? Sing up</Link>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;