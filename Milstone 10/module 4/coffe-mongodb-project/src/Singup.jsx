import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Singup = () => {
    const {createUser}=useContext(AuthContext);

    const handleForm=event=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const Name = event.target.Name.value;

        createUser(email,password) /// this is the authentication function and the rest is posting data to db.
        .then(result=>{
            console.log(result.user);
            const createdAt= result?.user?.metadata?.createdAt;
            const newUser ={Name,email,createdAt}
            fetch('http://localhost:5001/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                
                if (data.insertedId) {
                    console.log("Singup Successful and id is : ",data.insertedId);
                    
                }
            })
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleForm}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="type your name" name='Name' className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
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

export default Singup;