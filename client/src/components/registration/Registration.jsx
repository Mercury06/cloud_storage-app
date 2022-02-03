import React, { useState } from "react";
import { registration } from "../../actions/users";
//import Input from "/code/use/cloud_storage_app/client/src/utils/input/Input";
//import "./registration.css";


const Registration = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    console.log(email, password)

    return (
        // <div className='registration'>
        <div>
            {/* <div className='registration_header'>Регистрация</div> */}
            <div>Регистрация</div>
            {/* <Input value={email} setValue={setEmail} type="text" placeholder="Введите email" /> */}
            <input setValue={setEmail} type="email" placeholder="Введите email" />
            {/* <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />   */}
            <input setValue={setPassword} type="password" placeholder="Введите пароль" />         
            {/* <button className="registration_btn">Войти</button> */}
            <button onClick={() => registration(email,password)}>Войти</button>
        </div>
    );
};

export default Registration;