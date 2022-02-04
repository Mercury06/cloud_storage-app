import React, { useState } from "react";
import { registration } from "../../actions/users";
//import Input from "/code/use/cloud_storage_app/client/src/utils/input/Input";
//import "./registration.css";


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
            {/* <Input value={email} setValue={setEmail} type="text" placeholder="Введите email" /> */}
                <input onChange={changeHandler} type="text" name="email" placeholder="Введите email" />
            {/* <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />   */}
                <input  onChange={changeHandler} type="password" name="password" placeholder="Введите пароль" />         
            {/* <button className="registration_btn">Войти</button> */}
                <button onClick={() => registration({...form})}>Войти</button>
        </div>
    );
};

export default Registration;