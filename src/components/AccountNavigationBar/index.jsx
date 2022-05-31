import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "##9c27b0",
  fontWeight: "bold",
  fontSize: 15,
  fontFamily: "Lato",
});

export default function HomeNavigationBar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        // backgroundColor: "#3493E8",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <Logo />
      </div>
      <div style={{ width: 750 }}></div>
      <div style={{ paddingTop: 30 }}>
        <Stack spacing={"5%"} direction="row">
          <CustomButton variant="contained" onClick={() => navigate("/")}>
            Home
          </CustomButton>
          <CustomButton
            variant="contained"
            onClick={() => navigate("/busroutes")}
          >
            Routes
          </CustomButton>
          <CustomButton
            variant="contained"
            onClick={() => navigate("/bookingview")}
          >
            Bookings
          </CustomButton>
          <CustomButton
            variant="contained"
            onClick={() => navigate("/accountpage")}
          >
            Account
          </CustomButton>

          <CustomButton variant="contained" onClick={() => navigate("/help")}>
            help
          </CustomButton>
        </Stack>
      </div>
    </div>
  );
}
