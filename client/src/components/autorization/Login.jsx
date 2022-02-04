import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "./../../actions/users";



const Login = () => {
   
    const[form, setForm] = useState({ email: "", password: "" })        
   
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const dispatch = useDispatch();   

    return (
        // <div className='registration'>
        <div>
            {/* <div className='registration_header'>Регистрация</div> */}
            <h1>Авторизация</h1>
            {/* <Input value={email} setValue={setEmail} type="text" placeholder="Введите email" /> */}
                <input onChange={changeHandler} type="text" name="email" placeholder="Введите email" />
            {/* <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />   */}
                <input  onChange={changeHandler} type="password" name="password" placeholder="Введите пароль" />         
            {/* <button className="registration_btn">Войти</button> */}
                <button onClick={() => dispatch(login({...form}))}>Войти</button>
        </div>
    );
};

export default Login;