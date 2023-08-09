import React from 'react';
import './Pages.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='content'>
                <Link to={'/js'}><button>Learn JavaScript</button></Link>
            </div>
        </div>
    )
}

export default Home;