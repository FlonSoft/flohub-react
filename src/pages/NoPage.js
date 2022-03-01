import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
    document.title = "Page not found! - flohub"
    return (
        <>
            <h1 className='mb-1'>Page not found!</h1>
            <div className='mt-1'>
                <Link to="/" className='btn btn-primary'>Go home</Link>
            </div>
        </>
    )
}

export default NoPage