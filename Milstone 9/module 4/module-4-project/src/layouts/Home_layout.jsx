import React from "react";
import Navbar from "./../components/Navbar";

const Home_layout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <img src="../../public/assets/logo.png" className="mx-auto my-4" />

      <Navbar></Navbar>
    </div>
  );
};

export default Home_layout;
