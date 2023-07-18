import React from 'react'
import {Link} from 'react-router-dom'
 import Dropdown from './components/Dropdown'
import Account from './components/Account'
const Navbar = () =>{

    return (<nav>
        <div>
            <Link to='/'>Sceduling</Link>
        </div>
        <div>
            <Link to='/news'>News</Link>
        </div>
        <div>
           <Dropdown />
        </div>
        <div>
            <Account />
        </div>
    </nav>)
}

export default Navbar;


/*
Sceduling
A
*/