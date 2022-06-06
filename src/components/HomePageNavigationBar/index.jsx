import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#000",
  fontWeight: "bold",
  fontSize: 15,
  fontFamily: "Lato",
});

export default function HomePageNavigationBar() {
  const navigate = useNavigate();
  const myStyle = {
    color: "#9c27b0",
    fontSize: 36,
    fontFamily: "Lato",
    margin: 0,
  };
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
        <h1 style={myStyle}>ET</h1>
        <div style={{ width: 10 }} />
        <h1 style={{ fontSize: 36, margin: 0 }}>Etikcet</h1>
      </Stack>
      <Stack direction="row">
        <CustomButton variant="text" onClick={() => navigate("/busroutes")}>
          Routes
        </CustomButton>
        <CustomButton variant="text" onClick={() => navigate("/help")}>
          Help
        </CustomButton>
        <CustomButton variant="text" onClick={() => navigate("/signin")}>
          Sign in
        </CustomButton>
        <CustomButton variant="text" onClick={() => navigate("/signup")}>
          Sign up
        </CustomButton>
      </Stack>
    </Stack>
  );
}
