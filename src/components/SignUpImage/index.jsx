import React from "react";
import SignUpBG from "./image.svg";

export default function SignUpImageDiv() {
  return (
    <div
      style={{
        // backgroundImage: `url(./loginBG.svg)`,
        top: "30%",
        width: "30%",
        height: "60%",
        left: "10%",
        position: "absolute",
        backgroundSize: "cover",
        backgroundImage: "url(" + SignUpBG + ")",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
