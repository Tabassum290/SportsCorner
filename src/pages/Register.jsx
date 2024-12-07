import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { AiFillGoogleCircle } from 'react-icons/ai';

const Register = () => {
  const {createNewUser,setUser,updateUserProfile,loginWithGoogle}=useContext(AuthContext);
  const [error,setError] = useState({});
  const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {name,photo,email,password};
        if(name.length<6 ){
           setError({...error, name:"must be more than 6 character long"});
           return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
          setError((prev) => ({
            ...prev,
            password: 'Password must be at least 6 characters long, contain uppercase and lowercase letters.',
          }));
          return;
        }
        console.log(user);
 createNewUser(email,password)
 .then(result =>{
  setUser(result.user);
  updateUserProfile({ displayName:name,photoURL:photo })
  .then(()=>{
  navigate("/");
  }).catch( err => {
   console.log(err.message);
  })
  toast.success('Welcome to Sports Equipment store');
 })
 .catch(err =>{
  setError({...error, register: err.code});
  toast.error('Registration failed. Please try again.');
 })
}

const handleGoogleLogin = () => {
  loginWithGoogle()
    .then((result) => {
      setUser(result.user);
      toast.success('Successfully logged in with Google!');
      const redirectPath = location?.state?.from?.pathname || '/';
      navigate(redirectPath);
    })
    .catch((err) => {
      toast.error(`Google login failed: ${err.message}`);
    });
};

const handleGoogleRegister= () => {
  loginWithGoogle()
    .then((result) => {
      setUser(result.user);
      toast.success('Successfully logged in with Google!');
      const redirectPath = location?.state?.from?.pathname || '/';
      navigate(redirectPath);
    })
    .catch((err) => {
      toast.error(`Google login failed: ${err.message}`);
    });
};
    return (
        <div>
            <Navbar/>
            <div className="hero min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl text-black">
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
        {
          error.name && (
            <label className="label text-sm text-rose-500">{error.name}</label>
          ) 
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
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
        </div>
        {error.password && (
                  <label className="label text-sm text-rose-500">{error.password}</label>
                )}
        <div className="form-control mt-6 flex">
          <button className="btn btn-primary">Register</button>
          <p className='text-center'>Or</p>
          <button onClick={handleGoogleRegister} className="btn btn-primary"><span className='text-2xl'><AiFillGoogleCircle /></span>Login With Google</button>
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