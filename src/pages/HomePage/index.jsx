import React from "react";

import HomeNavigationBar from "../../components/HomeNavigationBar";
import Footer from "../../components/Footer";
import PopularRoutes from "../../components/PopularRoutes";
import bImage from "../HomePage/bg.png";
import Logo from "../../components/Logo/index";

export default function Home() {
  return (
    (document.title = "Home page"),
    (
      <div
        style={{
          backgroundImage: `url(${bImage})`,
          backgroundRepeat: "no-repeat",
          height: 380,
        }}
      >
        <div>
          <HomeNavigationBar />
          <Logo />
          <div style={{ color: "white",padding:10}}>
            
            <p>Your partner in booking</p>
            <h2>It's time to</h2>
            <h1>Discover</h1>
            <p>find and book your seat</p>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 30,
            fontStyle: "italic",
            color: "grey",
          }}
        >
          Popular Routes
        </p>

        <PopularRoutes />

        <Footer />
      </div>
    )
  );
}
