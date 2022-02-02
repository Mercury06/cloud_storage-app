import React from "react";
//import "./Input.css";

const Input = ({ value, type, placeholder}) => {

    return (
       <input 
              value={value} 
              type={type} 
              placeholder={placeholder} />
    );
};

export default Input;

//onChange={(event) => props.setValue(event.target.value)} 