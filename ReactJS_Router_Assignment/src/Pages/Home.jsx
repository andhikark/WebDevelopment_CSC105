import React from 'react'
import { useState } from 'react';
import '../Styles/Home.css'
import { NavLink } from "react-router-dom";

function Home({ userLogin, setuserLogin }) {
    const handleLogin = () => setuserLogin(true)
    const handleLogout = () => setuserLogin(false)

    return (
        <div>
            <h1>Hello World</h1>
            {userLogin ? (
                <button className='login' onClick={handleLogout}>Logout</button>
            ) : (
                <button className='login' onClick={handleLogin}>Login</button>
            )}
            {}
        </div>
    )
}

export default Home