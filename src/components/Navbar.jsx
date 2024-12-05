import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/allsportsequipment" className={"mx-4"}>All Sports Equipment</NavLink>
    <NavLink to="/addequipment">Add Equipment</NavLink>
    <NavLink to="/myequipmentlist" className={"mx-4"}>My Equipment</NavLink>
   
    </>
    return (
        <div className='sticky z-10 top-0'>
            <div className="navbar bg-blue-800 text-white font-semibold">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-blue-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost lg:text-xl sports">Sports Corner</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <Link to="/login" className='btn'>Login</Link>
    <Link to="/register" className='btn'>Register</Link>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;