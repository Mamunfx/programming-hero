import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

import  { AuthContext } from "./Authprovider/Authprovider";
import { useContext } from 'react';


const Navbar = () => {
  const {user,singout}=useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="User">User</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        {
          user && user?.email ?
          (<button onClick={singout}>Log-out</button>)
          :(<Link to="/AuthLayout" className="btn bg-black text-base-100">Login</Link>)
        }
        
      </div>
    </div>
  );
};

export default Navbar;
