import React from 'react';
import Navbar from '../src/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  './App.css';
import Home from './Home';
import Services from './Services';
import Product from './Product.js';
import SignUp from './SignUp';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Product' element={<Product/>} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
