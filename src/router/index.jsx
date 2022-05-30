import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUp";
import Checkout from "../pages/Checkout";
import BusRoutes  from "../pages/BusRoutes";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />     
          <Route path="/checkout" element={<Checkout />} />    
          <Route path="/busroutes" element={<BusRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
