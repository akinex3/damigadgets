import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCustomHook from '../useCustomHook';

const DetailPage = () => {
    const { id } = useParams();
    let navigate = useNavigate();
    // Note: Ensure that the URL is constructed correctly by adding a forward slash before the id
    let URL = `https://my-json-server.typicode.com/akinex3/damilola/blogs/${id}`;

    const { data: blog, isLoading, isError } = useCustomHook(URL); // Corrected hook name

    const handleDelete = async () => {
        try {
            await fetch(URL, {
                method: "DELETE"
            });

            navigate("/gadgets");
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div className='container'>
            {isLoading && (
                <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {isError && <div>Error Fetching data </div>}

            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <div key={blog.id} className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>{blog.coo}</p>
                        <div>
                            <button onClick={handleDelete} className='btn btn-danger'>
                                Delete Blog
                            </button>
                        </div>
                    </div>
                </article>
            )}
        </div>
    );
}

export default DetailPage;

