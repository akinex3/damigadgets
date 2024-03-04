import React, { useState } from 'react';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [coo, setCoo] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Corrected variable name

    let URL = "http://localhost:8000/blogs";

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, coo, body };
        console.log(blog);

        setIsLoading(true);

        fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className='container'>
            <h1 className='text-container'>Add Blogs</h1>
            <form onSubmit={handleSubmit}>

export default NewBlog;

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Corrected attribute name
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country Of Origin</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Country of origin"
                        value={coo}
                        onChange={(e) => setCoo(e.target.value)} // Corrected variable name
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        value={body}
                        onChange={(e) => setBody(e.target.value)} // Corrected attribute name
                    ></textarea>
                </div>
                <div className="d-grid gap-2">
                    {
                        !isLoading && <button className='btn btn-primary'>Submit</button>
                    }
                    {
                        isLoading && <button disabled className='btn btn-primary'>Adding Blog...</button>
                    }
                  
                </div>
            </form>
        </div>
    );
}

export default NewBlog;

