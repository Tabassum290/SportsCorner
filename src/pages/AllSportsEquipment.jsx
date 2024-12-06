import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router-dom';

const AllSportsEquipment = () => {
    const loadedequipment = useLoaderData();
    const [equipments,setEquipments] = useState(loadedequipment);
    console.log(loadedequipment);
    return (
        <div className='bg-blue-200'>
            <Navbar/>
            <div className='my-8'>
            <h1 className='text-3xl font-bold text-center my-8 add'>All Equipments :{equipments.length} </h1>
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