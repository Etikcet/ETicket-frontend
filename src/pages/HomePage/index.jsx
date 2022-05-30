import React from "react";

import HomeNavigationBar from "../../components/HomeNavigationBar";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    (document.title = "Home page"),
    (
      <div>
        <div>
          <HomeNavigationBar />
          <p>Your partner in booking</p>
          <h2>It's time to</h2>
          <h1>Discover</h1>
          <p>find and book your seat</p>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 30,
            fontStyle: "italic",
          }}
        >
          Popular Routes
        </p>
        
        <Footer />
      </div>
    )
  );
}
