import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between my-4'>
            <div></div>
            <div >
                <ul className='flex gap-4'>
                    <li><Link>Home</Link></li>
                    <li><Link>Career</Link></li>
                    <li><Link>About us</Link></li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <img src="../../public/assets/user.png" />
                <button className='btn bg-[#403F3F] text-base-100'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;