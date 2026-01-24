import React from 'react'
// import { CustomTabPanel } from '@mui/material'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div>
            {/* <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel> */}
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
