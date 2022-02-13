import React, { useState } from "react";
import { registration } from "../../actions/users";
//import Input from "/code/use/cloud_storage_app/client/src/utils/input/Input";
import "./authorization.css";
import { Navigate } from "react-router-dom";


const Registration = () => {
   
    const[form, setForm] = useState({ email: "", password: "" })        
    const[response, setResponse] = useState('')
   
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
       

    return (
        <div className='authorization'>        
            <div className="authorization__header"><h4>Registration</h4></div>            
            
                <input onChange={changeHandler} autofocus type="text" name="email" placeholder="Enter your email" autoFocus="autofocus" /><br></br>           
                <input  onChange={changeHandler} type="password" name="password" placeholder="Password" /> <br></br>
                <button className="authorization__btn" onClick={() => registration({...form}, setResponse)}>Submit</button>
                {/* { response && <div className="authorization_response">{response}</div>} */}
                { response && <Navigate to="/result" replace /> }
        </div>
    );
};

export default Registration;