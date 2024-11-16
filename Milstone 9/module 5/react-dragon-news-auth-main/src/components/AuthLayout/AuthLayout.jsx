import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;