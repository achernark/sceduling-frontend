
import React,{useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginForm = () =>{

    const navigate = useNavigate();

    const [companyID, setCompanyID] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

        //company ID
    const companyIDHandler = (event) => {
        setCompanyID(event.target.value)
    }
        //username
    const usernameHandler =(event) => {
        setUsername(event.target.value)
    }
        //password
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }


    
    const loginSubmitHandler = async (event) => {     //<form> handler when submited
        event.preventDefault();             //prevents default submission
        
        
        try{
            const response = await axios.post('http://localhost:4000/api/account/login', {companyID,username,password})
            
            if(response.data.success){
                console.log("loggin success")
                navigate('/account');
            }else{
                
            }
        }catch(error){
            setError("An Error has occured during login");
            console.error(error)
        }
        
    }

    return (<div>
        <form onSubmit={loginSubmitHandler}>
            <div>
                <label htmlFor="companyID">Company ID</label>
                <input type="text" pattern="[0-9]*" inputMode="numeric" id="companyID" name='companyID' onChange={companyIDHandler}/>
            </div>
            <div>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' onChange={usernameHandler}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id="password" name='password' onChange={passwordHandler}/>
            </div>
            <div>
                <label htmlFor="rememberAccount">Remember Account</label>
                <input type="checkbox" id="rememberAccount" name="rememberAccount" />
            </div>
            <button type='submit' name='login'>Login</button>
        </form>
    </div>)
}

export default LoginForm;