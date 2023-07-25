import React,{useState} from "react";

const Form = () =>{

        
    const [companyID, setCompanyID] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);


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


    
    const loginSubmitHandler = (event) => {     //<form> handler when submited
        event.preventDefault();             //prevents default submission
    }
    return (<div>
        <form onSubmit={loginSubmitHandler}>
            <div>
                <label for="companyID">Company ID</label>
                <input type="text" pattern="[0-9]*" inputMode="numeric" id="companyID" name='companyID' onChange={companyIDHandler}/>
            </div>
            <div>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' onChange={usernameHandler}/>
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password' id="password" name='password' onChange={passwordHandler}/>
            </div>
            <div>
                <label for="rememberAccount">Remember Account</label>
                <input type="checkbox" id="rememberAccount" name="rememberAccount" />
            </div>
            <button type='submit' name='login'>Login</button>
        </form>
    </div>)
}

export default Form;