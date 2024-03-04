import React from 'react';
import { Link } from 'react-router-dom';

const GadgetBlogList = ({ blogs }) => {
  return (
    <div>
      <h1 className='title'>Gadgets Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <h2>{blog.title}</h2>
          <p>{blog.body.slice(0, 50)} <Link to={`/gadgets/${blog.id}`}>Read More...</Link></p>
          <p>{blog.coo}</p>
          {/* Uncomment the following block if you have a delete functionality */}
          {/* <div>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default GadgetBlogList;

