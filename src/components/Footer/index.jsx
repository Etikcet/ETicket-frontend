import React from "react";
import HeightBox from "../HeightBox";

export default function footer() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <HeightBox height={20} />
      <p
        style={{
          textAlign: "center",
          color: "#000",
          margin: 0,
        }}
      >
        ©All right reserved 2022<br></br>ET ticket
      </p>
      <HeightBox height={20} />
    </div>
  );
}
