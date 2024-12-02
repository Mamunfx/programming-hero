import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Singin = () => {

    const {singinUser}=useContext(AuthContext);

    const handleForm=event=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        singinUser(email,password)
        .then(result => {
            console.log(result.user);
            const createdAt = result.user.metadata.createdAt;
            const loginInfo={email,createdAt}

            fetch(`https://coffe-mongodb-hrffoye3v-md-moonzoor-mamun-munnas-projects.vercel.app/users`,{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
                    .then(data => {
                        console.log('sign in info updated in db', data)
                    })

        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
      <div>
        <h1>Sing in Page : </h1>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
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

export default Singin;