import React, { useState } from "react";
import { registration } from "../../actions/users";
//import Input from "/code/use/cloud_storage_app/client/src/utils/input/Input";
import "./authorization.css";


const Registration = () => {
   
    const[form, setForm] = useState({ email: "", password: "" })        
   
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
       

    return (
        // <div className='registration'>
        <div>
            {/* <div className='registration_header'>Регистрация</div> */}
            <h1>Регистрация</h1>
            
                <input onChange={changeHandler} type="text" name="email" placeholder="Введите email" />           
                <input  onChange={changeHandler} type="password" name="password" placeholder="Введите пароль" /> 
                <button onClick={() => registration({...form})}>Войти</button>
        </div>
    );
};

export default Registration;