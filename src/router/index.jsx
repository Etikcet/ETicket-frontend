import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUp";
import Checkout from "../pages/Checkout";
import SignIn from "../pages/SignIn";
import BusRoutes from "../pages/BusRoutes";
import AddRoutes from "../pages/AddRoutes";
import AddSchedules from "../pages/AddSchedules";
import AccountPage from "../pages/AccountPage";
import BookingView from "../pages/BookingView";

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
          <Route path="/addroutes" element={<AddRoutes />} />
          <Route path="/addschedules" element={<AddSchedules />} />
          <Route path="/dashboard" element={<AccountPage />} />
          <Route path="/bookingview" element={<BookingView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
