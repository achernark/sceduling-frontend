import React,{useState} from "react";
import {Link} from 'react-router-dom'

const CreateAccount = () => {

    const maxDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);

        //useState variable declarations
    const [firstName,setFirstName]=useState(null);
    const [lastName,setLastName]=useState(null);
    const [dob,setDOB]=useState(null)
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [buisnessName,setBuisnessName]=useState(null)

        //First Name onChange handler function
    const firstNameHandler = (event) => {
        setFirstName(event.target.value);

    }
        //Last Name onChange handler function
    const lastNameHandler = (event) => {
        setLastName(event.target.value);

    }
        // Date of birth onChange handler function
    const dobHandler = (event) => {
        setDOB(event.target.value);

    }
    //username onChange handler function
    const usernameHandler =(event) => {
        setUsername(event.target.value)
    }
        //password onChange handler function
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
        //Buisness name onChange handler function 
    const buisnessNameHandler = (event) =>{
        setBuisnessName(event.target.value);

    }

        // function executes when the form is submited
    const onSubmitHandler = (event) => {
        event.preventDefault();

    }


        
    return(<div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' pattern="^[A-Za-z]+$" onChange={firstNameHandler}/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' pattern="^[A-Za-z]+$" onChange={lastNameHandler}/>
            </div>
            <div>
                <label htmlFor='DOB'>Date of Birth</label>
                <input type="date" id='DOB' name='DOB' min={minDate.toISOString().slice(0, 10)} max={maxDate.toISOString().slice(0, 10)} onChange={dobHandler}/>
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
                <label htmlFor='buisnessName'>Buisness Name</label>
                <input type='text' id='buisnessName' name='buisnessName' onChange={buisnessNameHandler}/>
            </div>
            <button type='submit' name='createAccount'>Create Account</button>
        </form>
    </div>)
    
}

export default CreateAccount;