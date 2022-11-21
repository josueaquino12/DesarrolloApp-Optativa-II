import React from 'react';
import './App.css';
import HomePage from './mockups/HomePage';
import NotFound404 from './mockups/NotFound404';
import Navbar from './components/Navbar';
import LandingEdicionForms from './mockups/LandingEdicionForms';
import LandingFormularioGuardar from './mockups/LandingFormularioGuardar';

import{
  BrowserRouter as Router,
  Routes ,
  Route,
  } from "react-router-dom";



function App() {
  return (
    <div>

        <Router>
          
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/> 
              <Route path='*' element={<NotFound404/>} />
              <Route path='/landingEdicionForms' element={<LandingEdicionForms/>} />
              <Route path='/landingFormularioGuardar/' element={<LandingFormularioGuardar/>} />
            </Routes>
        </Router>      
    </div>
  );
}

export default App;
