import React from "react";

import HomeNavigationBar from "../../components/HomeNavigationBar";
import BackgroundImage from "./background.jpg";



export default function Home() {
  return (
    <div>
      <div>
        <HomeNavigationBar />
        <p>Your partner in booking</p>
        <h2>It's time to</h2>
        <h1>Discover</h1>
        <p>find and book your seat</p>
      </div>

      <h1
        style={{
          textAlign: "center",
        }}
      >
        Popular Routes
      </h1>
    </div>
  );
}
