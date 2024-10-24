import { useEffect, useState } from "react";
import Blog from "./Blog/blog";
const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('../src/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='col-span-2 border'>
            <h1>{blogs.length}</h1>
            {
                blogs.map( blog=> <Blog
                key={blog.id}
                blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;