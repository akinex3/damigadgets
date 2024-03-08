import React, { useState } from 'react';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [coo, setCoo] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const URL = "https://my-json-server.typicode.com/akinex3/damilola/blogs";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blog = { title, coo, body };
        console.log(blog);

        setIsLoading(true);

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog),
            });

            if (response.ok) {
                console.log('Blog added successfully');
                // Additional logic if needed
            } else {
                console.error('Failed to add blog');
            }
        } catch (error) {
            console.error('Error adding blog:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container'>
            <h1 className='text-container'>Add Blogs</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country Of Origin</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Country of origin"
                        value={coo}
                        onChange={(e) => setCoo(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className='btn btn-primary' disabled={isLoading}>
                        {isLoading ? 'Adding Blog...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewBlog;


