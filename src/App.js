import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './screens/HomePage';
import TopNavBar from './screens/TopNavBar';
import Footer from './screens/Footer';
import AccountPage from 'screens/AccountPage';
import OrdersAndSubscriptionsPage from 'screens/OrdersAndSubscriptionsPage';

import "./index.css"


export default function App() {
  return (
    <BrowserRouter>
        <TopNavBar />
        <Routes>
          <Route exact path ='/' element={<HomePage/>} />
          <Route exact path ='/account' element={<AccountPage/>} />
          <Route exact path ='/ordersandsubscriptions' element={<OrdersAndSubscriptionsPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
