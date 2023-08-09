import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='outer'>
            <header className='header'>
                <Link to={'/'}>
                    <div
                        className='logo'
                        title='Home'>
                    </div>
                </Link>
                <div className={`nav_link ${menuOpen ? 'open' : ''}`}>
                    <Link
                        className='link'
                        to={'/'}>
                        <div title='Home'>
                            Home
                        </div>
                    </Link>
                    <Link
                        className='link'
                        to={'/contact'}>
                        <div title='Contact'>
                            Contact
                        </div>
                    </Link>
                    <Link
                        className='link'
                        to={'/about'}>
                        <div title='About'>
                            About
                        </div>
                    </Link>
                    <Link
                        className='link'
                        to={'/login'}>
                        <div title='Login'>
                            Login
                        </div>
                    </Link>
                </div>
                <div className='main_icon'>
                    <div
                        className='icon'
                        onClick={toggleMenu}
                        title='Menu'>
                        <FiMenu />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar;
