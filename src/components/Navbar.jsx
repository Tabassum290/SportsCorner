import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
    const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/allsportsequipment" className={"mx-4"}>All Sports Equipment</NavLink>
    <NavLink to="/addequipment">Add Equipment</NavLink>
    <NavLink to="/myequipmentlist" className={"mx-4"}>My Equipment</NavLink>
  </>


const handleMouseEnter = () => {
  setShowName(true);
};

const handleMouseLeave = () => {
  setShowName(false);
};



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

<a className="lg:text-xl text-md flex justify-center items-center italic"><span>Sports Corner</span>
<DotLottieReact
className='lg:h-[60px] lg:w-[120px] w-[50px] h-[40px]'
      src="https://lottie.host/d41e40b4-cc5b-413e-a072-a3cb4f26a020/XgyTJ0qhwN.lottie"
      loop
      autoplay
    />

</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
  <div className="navbar-end flex items-center gap-4">
          <div className="avatar">
            <div className="w-8">
              {user && user?.email ? (
                <div className="flex flex-col items-center">
                  <img
                    className="w-12 rounded-3xl"
                    src={user?.photoURL}
                    alt="Profile"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  {showName && (
                    <p className="absolute mt-6 text-sm font-semibold">{user.displayName}</p>
                  )}
                  </div>
              ) : (
                <div className="relative flex flex-col items-center">
                    
                </div>
              )}
            </div>
          </div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn btn-outline text-white">
              LogOut
            </button>
          ) : (
            <>
               <Link to="/login" className="btn">Login</Link> 
               <Link to="/register" className='btn'>Register</Link>
            </>)}
        </div>
  </div>
</div>
</div>
    );
};

export default Navbar;