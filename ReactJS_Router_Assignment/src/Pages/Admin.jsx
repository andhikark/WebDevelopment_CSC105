import React from 'react'
import '../Styles/Admin.css'
import { Navigate } from 'react-router-dom'

function Admin({ userLogin, setuserLogin }) {
    const handleLogout = () => setuserLogin(false)

    if (!userLogin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <img src="src/assets/masbro.jpg" alt="Capybara" />
            <h1>This is Admin Page</h1>
            <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Admin