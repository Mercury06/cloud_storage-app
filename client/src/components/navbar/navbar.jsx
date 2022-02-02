import React from 'react';
//import './navbar.css'
//import Logo from './assets/img/navbar-logo.svg'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        // <div className="navbar">
        <div>
            {/* <div className="container"> */}
            <div>
                {/* <img src={Logo} alt="" classname="navbar_logo" /> */}
                {/* <div className="navbar_header">MERN CLOUD</div> */}
                <div>MERN CLOUD</div>
                {/* <div className="navbar_login"><Navlink to="/login">Войти</Navlink></div> */}
                <div ><NavLink to="/login">Войти</NavLink></div>
                {/* <div className="navbar_registration"><Navlink to="/registration">Регистрация</Navlink></div> */}
                <div><NavLink to="/registration">Регистрация</NavLink></div>
            </div>            
        </div>
    );
};

export default Navbar;