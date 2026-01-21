import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signup" className={({isActive}) => isActive ? "active-link" : ""}>
                        Signup
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
