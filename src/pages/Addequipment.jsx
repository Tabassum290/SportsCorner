import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Addequipment = () => {
    const {user}= useContext(AuthContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
       const item = e.target.item.value;
       const category = e.target.category.value;
       const description = e.target.description.value;
       const image = e.target.image.value;
       const price = e.target.price.value;
       const rating = e.target.ratings.value;
       const time = e.target.time.value;
       const customisation = e.target.customisation.value;
       const stock = e.target.stock.value;
       const name = e.target.name.value;
       const email = e.target.email.value;
       const equipment = {item,category,description,image,price,rating,time,customisation,stock,name,email};
       console.log(equipment);

fetch('http://localhost:4000/equipment',{
    method:'POST',
    headers: {
       'content-type':'application/json'
    },
    body : JSON.stringify(equipment)
})
.then(res=> res.json())
.then(data=>{
    console.log(data)
    if(data.insertedId){
        Swal.fire({
            title: "Are you sure?",
            text: "You want to add this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Success",
                text: "Your Equipment has been Added.",
                icon: "success"
              });
            }
          });
    }
})

    }
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center items-center'>
              <h1 className='lg:text-3xl text-2xl  add text-center font-bold my-6'>Add Equipment</h1>
<div className='flex justify-center items-center'>
<DotLottieReact
className='lg:h-[60px] lg:w-[120px] w-[50px] h-[40px]'
      src="https://lottie.host/d41e40b4-cc5b-413e-a072-a3cb4f26a020/XgyTJ0qhwN.lottie"
      loop
      autoplay
    />
</div>
</div>
      <form onSubmit={handleSubmit} className='w-11/12 mx-auto border-2 border-blue-900 rounded-lg p-6 mb-8 bg-blue-200'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">What is your Item Name?</span>
  </div>
  <input type="text" placeholder="Item Name" name="item" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">What is your Category Name?</span>
  </div>
  <input type="text" placeholder="Category Name" name="category" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">Image</span>
  </div>
  <input type="text" placeholder="Image" name="image" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">Description</span>
  </div>
  <textarea
      name="description"
      placeholder="Description"
      className="textarea textarea-bordered w-full max-w-xs"
    ></textarea>
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">Price</span>
  </div>
  <input type="text" placeholder="Price" name="price" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">Ratings</span>
  </div>
  <input type="text" placeholder="Ratings" name="ratings" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">Processing Time</span>
  </div>
  <input type="text" placeholder="Processing Time" name="time" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
 <div className='mb-8'>
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text text-xl">Customization</span>
    </div>
    <textarea
      name="customisation"
      placeholder="Customise"
      className="textarea textarea-bordered w-full max-w-xs"
      rows="2"
    ></textarea>
  </label>
</div>
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">Stock Status</span>
  </div>
  <input type="text" placeholder="available product quantity" name="stock" className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">User Name</span>
  </div>
  <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
</label>
 </div>
 <div className='mb-8'>
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-xl">User Email</span>
  </div>
  <input type="text" placeholder="Email" name="email" defaultValue={user?.email}className="input input-bordered w-full max-w-xs"/>
</label>
 </div>
 </section>
 <div className='flex justify-center'>
    <button className='btn btn-primary text-white lg:w-1/4'>Add Equipment</button>
 </div>
</form>


<Footer/>
        </div>
    );
};

export default Addequipment;