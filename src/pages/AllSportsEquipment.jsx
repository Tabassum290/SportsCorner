import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AllSportsEquipment = () => {
    const loadedequipment = useLoaderData();
    const [equipments,setEquipments] = useState(loadedequipment);
    console.log(loadedequipment);
    return (
        <div className='bg-blue-200'>
            <Navbar/>
            <div className='my-8'>
              <div className='lg:flex md:flex justify-center items-center'>
              <h1 className='lg:text-3xl text-2xl  add text-center font-bold mt-6'>All Equipments : {equipments.length}
               </h1>
<div className='flex justify-center items-center'>
<DotLottieReact
className='lg:h-[60px] lg:w-[120px] w-[50px] h-[40px]'
      src="https://lottie.host/d41e40b4-cc5b-413e-a072-a3cb4f26a020/XgyTJ0qhwN.lottie"
      loop
      autoplay
    />
</div>
</div>
 
            <section className='w-11/12 mx-auto'>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        equipments.map(equipment =>
          <tr key={equipment._id}>
          <th>{equipment.item}</th>
          <td>{equipment.category}</td>
          <td>{equipment.price}</td>
          <td><Link to={`/viewdetails/${equipment._id}`}
 className="btn btn-sm btn-primary" >
View Details </Link>
 </td>
        </tr>
        )
      }
    
    </tbody>
  </table>
</div>
            </section>
        </div>
            <Footer/>
        </div>

    );
};

export default AllSportsEquipment;