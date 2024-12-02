import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Card = ({coffee}) => {
const {_id,Name,supplier,taste,category,details,photo}=coffee;

const handleDelete=_id=>{

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
      
      fetch(`https://coffe-mongodb-hrffoye3v-md-moonzoor-mamun-munnas-projects.vercel.app/coffee/${_id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      })
    }
  });

}
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">NAME : {Name}</h2>
          <div className="">
          <p>Details : {details}</p>
          <p>Supply :  {supplier}</p>
          <p>Taste : {taste}</p>
          <p>Category :  {category}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
            <Link to={`/UpdateCoffe/${_id}`}> <button className="btn btn-primary">Edit</button> </Link>
            <button className="btn btn-primary" onClick={()=>handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
