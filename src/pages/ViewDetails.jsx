import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ViewDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const {_id,item,category,description,image,price,rating,time,customisation,stock,name,email} = data;
    return (
        <div>
            <Navbar/>
            <div className='lg:flex md:flex justify-center items-center'>
            <h1 className='lg:text-3xl text-2xl  add text-center font-bold mt-6'>Detailed Information Of : {data.item} </h1>
<div className=' text-center flex justify-center items-center'>
<DotLottieReact
className='lg:h-[60px] lg:w-[120px] w-[50px] h-[40px]'
      src="https://lottie.host/d41e40b4-cc5b-413e-a072-a3cb4f26a020/XgyTJ0qhwN.lottie"
      loop
      autoplay
    />
</div>
    </div>
           <section className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3  border-2 border-blue-950 p-6 rounded-lg my-8 bg-blue-300'>
             <div className='md:flex justify-center items-center'>
              <img  className='h-[400px] w-[400px] border-2 p-4 rounded-lg mb-4' src={image} alt="" />
             </div>
             <div className='col-span-2'>
                <h1 className='text-3xl font-bold'>Item Name:{item}</h1>
                <p className='font-semibold my-4 text-lg'>Category Name : {category}</p>
                <p className='font-semibold my-4 text-lg'>Description : {description}</p>
                <p className='font-semibold my-4 text-lg'>Customisation : {customisation}</p>
                <p className='font-semibold my-4 text-lg'>Price : {price}$</p>
                <p className='font-semibold my-4 text-lg'>Processing Time : {time}</p>
                <p className='font-semibold my-4 text-lg'>Stock Status : {stock}</p>
                <p className='font-semibold my-4 text-lg flex'>Ratings : {rating} <span className='text-orange-700 text-2xl'><AiFillStar /></span></p>
             </div>
           </section>
            <Footer/>
        </div>

    );
};

export default ViewDetails;