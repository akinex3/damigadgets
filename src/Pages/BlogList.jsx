import React from 'react';
import "../css/BlogList.css"


const BlogList = ({blogs, handleDelete}) => {
    return (
        <div>
                 <h1 className='title'>Food Blog</h1>
            { 
                blogs.map((blog)=>(
                   <div key ={blog.id } className="blog-preview">
                       <h2>{blog.title}</h2>
                       <img src={blog.img} alt={blog.title} />
                       <p>{blog.body}</p>
                       <i>{blog.stateOfOrigin}</i>
                       <div>
                          <button onClick={()=>{handleDelete(blog.id)}}>Delete Blog</button>
                       </div>
                   </div>
                ))
            }
        </div>
    );
}

export default BlogList;
