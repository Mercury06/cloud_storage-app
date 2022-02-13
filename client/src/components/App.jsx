import React, { useEffect} from "react";
import Navbar from "./navbar/navbar";
import './app.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Registration from "./autorization/Registration"
import Login from "./autorization/Login"
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./../actions/users"
import { useStore } from 'react-redux'
import Disk from "./disk/Disk";
import RegistrationResult from './autorization/RegistrationResult'



function App() {

  const isAuth = useSelector( state => state.user.isAuth )
  const dispatch = useDispatch()
  const store = useStore()
  console.log(store.getState())
  
  useEffect(() => {
    dispatch(auth())    
  })

  return (
    
    <div className='app'>
          <Navbar />
          
        <div className="wrap">        
          { !isAuth ? 
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/result" element={<RegistrationResult />} />     

          </Routes> 
          :
          <Routes>
            <Route path="/disk" element={<Disk />} />
            <Route path="/login" element={<Navigate to="/disk" replace />} />
            <Route path="/" element={<Navigate to="/disk" replace />} />               
          </Routes> }  
        </div>

    </div>
  
  );
}

export default App;
