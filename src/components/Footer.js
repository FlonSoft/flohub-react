import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container flex-center'>
                <span className='copy'>&copy; <a href='https://flolon.cc' target='_blank' rel="noreferrer">Flolon</a>,&nbsp;2022</span>
                <span className='flex-grow'></span>
                <Link to='/about'>About</Link>
            </div>
        </footer>
    )
}

export default Footer