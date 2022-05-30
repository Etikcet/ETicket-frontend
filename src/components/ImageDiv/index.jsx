import React from "react";
// import image from "../ImageDiv/loginBG";
import loginBG from "./loginBG.svg";

export default function ImageDiv() {
  return (
    <div
      style={{
        // backgroundImage: `url(./loginBG.svg)`,
        top: "20%",
        width: "60%",
        height: "80%",
        left: "40%",
        position: "absolute",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundColor: "blueviolet",
        backgroundImage: "url(" + loginBG + ")",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
