import React from "react";
import {NavLink} from "react-router-dom";
import "./authorization.css";


const RegistrationResult = () => {   
    

    return (
        <div className='result'>
        
           <div>
                <p>Registration completed successfully</p>
                <p>You can<NavLink to="/registration">Login</NavLink> now</p>
           </div>
                
        </div>
    );
};

export default RegistrationResult;