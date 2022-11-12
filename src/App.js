import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './AuthContext';

// import LoginPage from 'screens/LoginPage';
import HomePage from './screens/HomePage';
// import BlogPage from './screens/BlogPage';
// import AboutPage from './screens/AboutPage';
import TopNavBar from './screens/TopNavBar';
import Footer from './screens/Footer';

import "./index.css"


export default function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <AuthProvider>
        <TopNavBar />
        <Routes>
          <Route exact path ='/' element={<HomePage/>} />
        </Routes>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  )
}
