import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "./../../actions/users";
import "./authorization.css";



const Login = () => {
   
    const[form, setForm] = useState({ email: "", password: "" })        
   
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const dispatch = useDispatch();   

    return (
        <div className='registration'>
        
            <div className='authorization__header'><h1>Авторизация</h1></div>
            
           
                <input onChange={changeHandler} type="text" name="email" placeholder="Введите email" /><br></br>
         
                <input  onChange={changeHandler} type="password" name="password" placeholder="Введите пароль" />         
          
                <button onClick={() => dispatch(login({...form}))}>Войти</button>
        </div>
    );
};

export default Login;