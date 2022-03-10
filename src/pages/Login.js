import React from 'react'

const Login = () => {
    document.title = "Sign In - flohub";
    return (
        <>
            <form>
                <h1 className='title'>Sign In</h1>
                <div className='stacked mt-1'>
                    <input className='input' type='text' placeholder='Username'></input>
                    <input className='input' type='password' placeholder='Password'></input>
                </div>
                <div className='mt-1'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Login