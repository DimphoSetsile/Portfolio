import React from 'react'
import './Navbar.css'
//mport logo from '../../assets/react.svg'

const Navbar = () => {
    return(
        <nav className='container'>
        
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                
                
            </ul>

        </nav>
    )
}
export default Navbar;