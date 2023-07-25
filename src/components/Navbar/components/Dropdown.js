import React, {useState} from "react";


const Dropdown =()=>{

    const [selectedOption,setSelectedOption] = useState('');


    const selectedOptionHandler =(event)=>{
        const selectedValue=event.target.value;
        setSelectedOption(selectedValue);
        window.location.href = selectedValue;
    }
    return(<div>
        
        <select name='more' id='more' value={selectedOption} onChange={selectedOptionHandler}>
            <option value=''>More</option>
            <option value='/about'>About</option>
        </select>
    </div>)
}

export default Dropdown;