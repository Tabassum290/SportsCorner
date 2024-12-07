import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import Equipmentcards from '../components/Equipmentcards';
import { AuthContext } from '../Providers/AuthProvider';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const MyEquipmentlist = () => {
   const loadedequipments = useLoaderData();
   const { user } = useContext(AuthContext);
    const [equipments,setEquipments] = useState(loadedequipments);

   const userEquipments = equipments.filter(equipment => equipment.email === user?.email);

   const handleDelete = (id) => {
    fetch(`https://assignment-10-server-side-plum.vercel.app/equipment/${id}`, { method: 'DELETE' })
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
            <div className='flex justify-center items-center'>
              <h1 className='lg:text-3xl text-2xl  add text-center font-bold my-6'>My Equipment List</h1>
<div className='flex justify-center items-center'>
<DotLottieReact
className='lg:h-[60px] lg:w-[120px] w-[50px] h-[40px]'
      src="https://lottie.host/d41e40b4-cc5b-413e-a072-a3cb4f26a020/XgyTJ0qhwN.lottie"
      loop
      autoplay
    />
</div>
</div>
    
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