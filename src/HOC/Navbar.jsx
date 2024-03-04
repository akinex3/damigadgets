import React from 'react';
import "../css/Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                        <li><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li><Link className='nav-link' to="/user">User</Link></li>
                        <li><Link className='nav-link' to="/about">About</Link></li>
                        <li><Link className='nav-link' to="/blog">Blog</Link></li>
                        <li><Link className='nav-link' to="/gadgets">GadgetBlog</Link></li>
                        <li><Link className='nav-link' to="/addblog">New Blog</Link></li>
                    </div>       
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
