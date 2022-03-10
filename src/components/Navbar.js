import React from 'react'
import { Link, useLocation } from 'react-router-dom'

var navTabsData = [
    {
        "name": "Home",
        "path": "/",
    },
    {
        "name": "Comics",
        "path": "/comics",
    },
    {
        "name": "Videos",
        "path": "/videos",
    }
]

function navTabs(path) {
    var tmp = []
    navTabsData.forEach(element => {
        var isActiveTab = ""
        if (`${path}` === element.path)
            isActiveTab = "active"
        tmp.push(<Link key={element.name} to={element.path} className={`nav-link ${isActiveTab}`}>{element.name}</Link>)
    });
    return (
        tmp
    )
}

const Navbar = () => {
    const pathName = useLocation().pathname
    return (
        <nav className='nav'>
            <div className='container flex-center'>
                <a className='logo' href='/'><img src='./logo_76.png' alt="flohub Logo" height='38px'></img></a>
                <span className='flex-grow'></span>
                <span className='nav-items'>
                    <Link to="/login" className='btn btn-primary'>Sign in</Link>
                </span>
            </div>
            <div className='nav-border'></div>
            <div className='navbar'>
                <div className='container'>
                    <span className='nav-items flex-center'>
                        {navTabs(pathName)}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;