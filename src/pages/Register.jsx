import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const {createNewUser,setUser}=useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {name,photo,email,password};
        console.log(user);
 createNewUser(email,password)
 .then(result =>{
  setUser(result.user);
  console.log(result.user);
 })
 .catch(error =>{
  console.log(error.code)
 })
    }
    return (
        <div>
            <Navbar/>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
    <div className="text-center px-16 mt-6">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='Photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 flex">
          <button className="btn btn-primary">Register</button>
          <p className='text-center'>Or</p>
          <button className="btn btn-primary"><span className='text-2xl'><AiFillGoogleCircle /></span>Login With Google</button>
        </div>
        <p className='p-4 font-semibold'>Already Have an Account?<Link to='/login' className='text-blue-600 font-bold underline'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
            <Footer/>
        </div>
    );
};

export default Register;