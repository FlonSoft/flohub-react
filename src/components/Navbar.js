import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import searchIconWhite from '../icons/search_white_24dp.svg'

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

const navTabs = (path) => {
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

const NavMenu = () => {
    const [isLoggedIn, setLoginState] = React.useState(false)
    const handleLoginState = () => setLoginState(true)
    // const handleLoginState = (state) => {
    //     setLoginState(state)
    //     console.log(isLoggedIn)
    // }

    if (isLoggedIn) {
        return (
            <>
                <button className='btn primary' onClick={handleLoginState(false)}>Sign out</button>
                <Link to="/login" className='btn primary' onClick={handleLoginState(true)}>Sign in</Link>
            </>
        )
    }
    return <Link to="/login" className='btn primary'>Sign in</Link>
}

const Navbar = () => {
    const pathName = useLocation().pathname
    return (
        <nav className='nav'>
            <div className='container flex-center'>
                <a className='logo' href='/'><img src='./logo_76.png' alt="flohub Logo" height='38px'></img></a>
                <span className="flex-center-full">
                    <input className="input light search no-border" name="q" id="q" type="search" placeholder="Search"></input>
                </span>
                {/* <a className="button search-btn icon with-icon" href="./search.html" title="Search"><img src={searchIconWhite} alt="Search"></img></a> */}
                <span className='nav-items'>
                    <NavMenu></NavMenu>
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