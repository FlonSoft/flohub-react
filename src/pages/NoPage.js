import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
    document.title = "Page Not Found - flohub"
    return (
        <>
            <h1 className='title'>Page Not Found</h1>
            <p>Sorry about that :(</p>
            <div className='mt-2'>
                <Link to="/" className='btn btn-primary'>Go Home</Link>
            </div>
        </>
    )
}

export default NoPage