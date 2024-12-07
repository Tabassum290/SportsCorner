import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AllSportsEquipment = () => {
    const loadedequipment = useLoaderData();
    const [equipments,setEquipments] = useState(loadedequipment);

    const handleSort = () => {
      const sortedEquipments = [...equipments].sort((a, b) => a.price - b.price);
      setEquipments(sortedEquipments);
      // fetch(`http://localhost:4000/equipmentsort?sort=${order}`)
      //     .then(res => res.json())
      //     .then(data => {
      //         setEquipments(data);
      //     });
  };



return (
        <div>
            <Navbar/>
            <div className='my-8'>
              <div className='lg:flex md:flex justify-center items-center'>
              <h1 className='lg:text-3xl text-2xl  add text-center font-bold mt-6 lg:my-6'>All Equipments : {equipments.length}
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
<section className='w-11/12 mx-auto bg-blue-200 lg:p-8 p-4 rounded-lg all text-black'>
<div className='grid grid-cols-3 lg:gap-6 gap-2 my-6 justify-around'>
<label className="input input-bordered flex items-center gap-2 col-span-2">
  <input type="text" className='grow' placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
<button   onClick={()=> handleSort()} className='btn btn-primary lg:w-2/3'>Sort By Price</button>
</div>
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
}

export default AllSportsEquipment;