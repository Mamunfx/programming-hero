import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';


const Leftbar = () => {
    const [category, setCategory]=useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
    },[])
    console.log(category);
    
    return (
        <div>
            <h1>All categories ({category.length})</h1>
            <div className='flex flex-col mr-4 gap-2'>
            {
                category.map((item)=> <NavLink className="btn bg-base-100 border-none"
                key={item.category_id}>{item.category_name}</NavLink>
                )
            }
            </div>
        </div>
    );
};

export default Leftbar;