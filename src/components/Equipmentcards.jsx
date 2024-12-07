import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Equipmentcards = ({equipment,onDelete}) => {
    const {_id,item,category,description,image,price,rating,time,customisation,stock,name,email} = equipment;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(_id); 
                Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
            }
        });
    };

    return (
        <div className='w-11/12 mx-auto'>
<div className="card card-compact bg-gray-200 w-96 shadow-xl my-8 text-black">
  <figure>
    <img className='h-[280px] p-4'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item}</h2>
    <p className='text-sm font-semibold'>Description: {description}</p>
    <p className='text-sm font-semibold'>Price: {price}$</p>
    <p className='text-sm font-semibold'>Ratings: {rating}</p>
    <p className='text-sm font-semibold'>Stock Status: {stock}</p>
    <div className="card-actions justify-end">
      <Link to={`/update/${_id}`} className="btn btn-primary">Update</Link>
      <button onClick={()=>handleDelete(_id)} className='btn'>Delete</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Equipmentcards;