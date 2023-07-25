import React,{useState} from "react";

const Account = () =>{

    const [selectedOption,setSelectedOption] = useState('')

    const selectedOptionHandler = (event) =>{
        const selectedValue= event.target.value;
        setSelectedOption(selectedValue);
        window.location.href = selectedValue;
    }
    return(<div>
        

        <select name="Account" id='account' value={selectedOption} onChange={selectedOptionHandler}>
            <option value=''>Account</option>
            <option value='/login'>Login</option>
        </select>

    </div>)
}

export default Account;