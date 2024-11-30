import React from "react";

const Card = ({coffee}) => {
const {Name,supplier,taste,category,details,photo}=coffee;
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
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
