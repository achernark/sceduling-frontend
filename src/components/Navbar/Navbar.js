import React from 'react'
import {Link} from 'react-router-dom'
 import Dropdown from './components/Dropdown'
import Account from './components/Account'
import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () =>{

    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand"to='/'>Sceduling</Link>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-brand">
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