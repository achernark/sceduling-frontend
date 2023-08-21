import React from "react";
import {Link} from "react-router-dom"
import LoginForm from './components/LoginForm'
import CreateAccount from "../CreateAccount/CreateAccount";


const Login = () =>{

    return (<div>
        <LoginForm />
        <Link to="/create-account">Create Account</Link>
    </div>)
}

export default Login;