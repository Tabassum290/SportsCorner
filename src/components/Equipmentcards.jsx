import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Equipmentcards = ({equipment}) => {
    const {item,category,description,image,price,rating,time,customisation,stock,name,email} = equipment;
    return (
        <div className='w-11/12 mx-auto'>
<div className="card card-compact bg-base-100 w-96 shadow-xl my-8">
  <figure>
    <img className='h-[280px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary">Update</Link>
      <button className='btn'>Delete</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Equipmentcards;