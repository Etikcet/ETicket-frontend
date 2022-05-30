import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUp";
import Checkout from "../pages/Checkout";
import BusRoutes from "../pages/BusRoutes";
import SignIn from "../pages/SignIn"

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/busroutes" element={<BusRoutes />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
