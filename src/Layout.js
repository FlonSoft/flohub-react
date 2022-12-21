import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <>
            <main>
                <Navbar></Navbar>
                <div className="pageContent container">
                    <Outlet />
                </div>
            </main>
            <Footer></Footer>
        </>
    )
};

export default Layout;