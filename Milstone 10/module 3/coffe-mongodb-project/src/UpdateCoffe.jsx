import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffe = () => {
    const coffee=useLoaderData();
    const {_id,Name,supplier,taste,category,details,photo}=coffee;
    
        const handleUpdate=event=>{
        event.preventDefault();
        const form =event.target;
        const Name=form.Name.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const data={Name,supplier,taste,category,details,photo};
        console.log(data);
        
        fetch(`https://coffe-mongodb-hrffoye3v-md-moonzoor-mamun-munnas-projects.vercel.app/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId) {
                alert("succefully added")
            }
        })
    }
    return (
        <div className="w-11/12 mx-auto my-14">
            <h1>Update info of : {Name}</h1>
      <h1 className="text-center text-2xl font-bold my-4">ADD Coffe</h1>
      <form className=" grid grid-cols-2 gap-3" onSubmit={handleUpdate} >
        <input
          type="text"
          name="Name"
          placeholder="name"
          className="border-2 p-4"
        />
        
        <input
          type="text"
          name="cheif"
          placeholder="cheif"
          className=" border-2 p-4"
        />
        <input
          type="text"
          name="supplier"
          placeholder="supplier"
          className="border-2 p-4"
        />
        
        <input
          type="text"
          name="taste"
          placeholder="taste"
          className=" border-2 p-4"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border-2 p-4"
        />
        
        <input
          type="text"
          name="details"
          placeholder="details"
          className=" border-2 p-4"
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo url"
          className=" border-2 p-4 col-span-2"
        />
        
        <input type="submit" value="Submit" className="btn btn-accent col-span-2" />
      </form>
    </div>
    );
};

export default UpdateCoffe;