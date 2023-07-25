import React from 'react'
import {Link} from 'react-router-dom'
 import Dropdown from './components/Dropdown'
import Account from './components/Account'
import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () =>{

    return (<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link class="navbar-brand"to='/'>Sceduling</Link>
        </div>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-brand">
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