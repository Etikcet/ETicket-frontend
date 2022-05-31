import React from "react";
import HOMEPAGE_IMAGE from "../../assets/homepage.jpg";
import Footer from "../../components/Footer";
import PopularRoutes from "../../components/PopularRoutes";
import HomePageNavigationBar from "../../components/HomePageNavigationBar";
import HeightBox from "../../components/HeightBox";
import HomePageRouteSelect from "../../components/HomePageRouteSelect";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${HOMEPAGE_IMAGE})`,
          backgroundRepeat: "no-repeat",
          height: 550,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HeightBox height={20} />
          <HomePageNavigationBar />
          <div style={{ color: "white", fontFamily: "Lato" }}>
            <HeightBox height={10} />
            <p style={{ fontSize: 15, margin: 0, opacity: 0.9 }}>
              Your partner in booking
            </p>
            <HeightBox height={10} />
            <h2 style={{ fontSize: 70, margin: 0, fontWeight: 500 }}>
              It's time to
            </h2>
            <h1 style={{ fontSize: 90, margin: 0, fontWeight: "bold" }}>
              Discover
            </h1>
            <p style={{ fontSize: 36, margin: 0, opacity: 0.5 }}>
              Find and book your seat
            </p>
          </div>
        </div>
      </div>
      <HomePageRouteSelect />
      <PopularRoutes />
      <HeightBox height={20} />
      <Footer />
    </div>
  );
}
