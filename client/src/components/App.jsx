import React from "react";
import Navbar from "./navbar/navbar";
//import s from '../components/app.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./registration/Registration"


function App() {
  return (
    <BrowserRouter>
      {/* <div className={s.app}> */}
      <div>
         Hello!
          <Navbar />
        {/* <div className="wrap"> */}
        <div>
          <Routes>
            <Route path="/registration" component={Registration} />
          </Routes>

        </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
