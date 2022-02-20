import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className='container flex-center'>
                    <Link className='logo' to='/'><img src='./flohub-nb.png' alt="flohub Logo" height='40px'></img></Link>
                    <span className='flex-grow'></span>
                    <span className='nav-items'>
                        <Link to="/login" className='btn btn-primary'>Sign in</Link>
                    </span>
                </div>
                <div className='nav-border'></div>
                <div className='navbar'>
                    <div className='container'>
                        <span className='nav-items flex-center'>
                            <Link to='/' className='nav-link active'>Home</Link>
                            <Link to='/comics' className='nav-link'>Comics</Link>
                            <Link to='/videos' className='nav-link'>Videos</Link>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}
