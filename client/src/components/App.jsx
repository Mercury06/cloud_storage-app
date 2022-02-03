import React from "react";
import Navbar from "./navbar/navbar";
//import s from '../components/app.scss'
import { Route, Routes } from "react-router-dom";
import Registration from "./registration/Registration"


function App() {
  return (
    
   < >
         
          <Navbar />
          
        {/* <div className="wrap"> */}
        <div>
          <Routes>
            <Route path="/registration" element={<Registration />} />
          </Routes>

        </div>

    </>
    //  </BrowserRouter>
  );
}

export default App;
