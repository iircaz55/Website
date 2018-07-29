import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';

import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <nav className='navbar col-lg-12 navbar-expand-lg'>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-toggle='collapse'
                            data-target='#navigation'
                            aria-controls='navigation'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon' />
                        </button>
                        <div className='collapse navbar-collapse row' id='navigation'>
                            <Link className='navbar-nav col-lg-3' to='/'>
                                <Logo/>
                            </Link>
                            <ul className='navbar-nav navbar-nav-center col-lg-6'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/projects'>Projects</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/team'>Team</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/roadmap'>RoadMap</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
