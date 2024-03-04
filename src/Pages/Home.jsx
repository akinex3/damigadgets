import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <div className='home'>
         <div className="d-flex h-100 text-center text-dg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main  className="px-3 main">
                    <h1> Cover your page.</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <Link to="/gadgets" className="btn btn-lg btn-secondary">Learn more</Link>
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Cover template for <Link to="https://getbootstrap.com/">Bootstrap</Link>, by <Link to="https://twitter.com/mdo">@mdo</Link>.</p>
                    </div>
                </footer>
            </div>

        </div>
  </div >
    );
}

export default Home;
