import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  const myStyle = {
    color: "#9c27b0",
    fontSize: 36,
    fontFamily: "Lato",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft: 20,
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <h1 style={myStyle}>ET</h1>
      <div style={{ width: 10 }} />
      <h1 style={{ fontSize: 36 }}>Etikcet</h1>
    </div>
  );
}
