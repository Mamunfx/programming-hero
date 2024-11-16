import React from "react";
import Navbar from "./../components/Navbar";
import Date from "../components/Date";
import Marquee from "react-fast-marquee";
import Leftbar from './../components/layout component/Leftbar';
import MainLayout from './../components/layout component/MainLayout';
import Right from './../components/layout component/Right';
import NewsLayout from "../components/NewsLayout";
import { Outlet } from 'react-router-dom';

const Home_layout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <img src="../../public/assets/logo.png" className="mx-auto my-4" />
      <Date></Date>
      <div className="flex p-4">
        <button className="btn bg-pink-600 btn-md ">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      </div>
      <Navbar></Navbar>

      <div className="grid grid-cols-12 my-8">
        <div className="col-span-3">
        <Leftbar ></Leftbar>
        </div>
       <div className="col-span-6">
       <Outlet></Outlet>
       </div>
       <div className="col-span-3">
       <Right ></Right>
       </div>
       
      </div>
    </div>
  );
};

export default Home_layout;
