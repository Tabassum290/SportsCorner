import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import Equipmentcards from '../components/Equipmentcards';

const MyEquipmentlist = () => {
    const equipments = useLoaderData();
    console.log(equipments);
    return (
        <div>
            <Navbar/>
            <h1 className='text-3xl font-bold text-center my-8 add'>My Equipment List :{equipments.length} </h1>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{
        equipments.map(equipment=><Equipmentcards key={equipment._id} equipment={equipment}></Equipmentcards>)
       }
</div>
      
 <Footer/>
        </div>
    );
};

export default MyEquipmentlist;