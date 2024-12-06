import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import Equipmentcards from '../components/Equipmentcards';
import { AuthContext } from '../Providers/AuthProvider';
const MyEquipmentlist = () => {
   const loadedequipments = useLoaderData();
   const { user } = useContext(AuthContext);
    const [equipments,setEquipments] = useState(loadedequipments);

   const userEquipments = equipments.filter(equipment => equipment.email === user?.email);

   const handleDelete = (id) => {
    fetch(`http://localhost:4000/equipment/${id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                const remaining = equipments.filter(equipment => equipment._id !== id);
                setEquipments(remaining);
            }
        })
        .catch((error) => {
            console.error("Error deleting equipment:", error);
        });
};

    return (
        <div>
            <Navbar/>
            <h1 className='text-3xl font-bold text-center my-8 add'>My Equipment List</h1>
    
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{
                    userEquipments.length > 0 
                    ? userEquipments.map(equipment => (
                        <Equipmentcards 
                        key={equipment._id} 
                        onDelete={handleDelete}
                        equipment={equipment}></Equipmentcards>
                    ))
                    : <p className='text-center text-xl col-span-full mb-8'>No equipment found for your account.</p>
                }
</div>
      
 <Footer/>
        </div>
    );
};

export default MyEquipmentlist;