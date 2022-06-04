import React from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#9c27b0",
  backgroundColor: "#fff",
  fontWeight: "bold",
  fontSize: 15,
  fontFamily: "Lato",
  "&:hover": {
    color: "#000",
    backgroundColor: "#fff",
  },
});

export default function AccountNavigationBar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div>
        <Logo />
      </div>
      <div style={{ width: 750 }}></div>
      <div style={{ paddingTop: 30 }}>
        <Stack spacing={5} direction="row">
          <CustomButton
            variant="contained"
            disableElevation
            onClick={() => navigate("/dashboard")}
          >
            Home
          </CustomButton>
          <CustomButton
            variant="contained"
            disableElevation
            onClick={() => navigate("/busroutes")}
          >
            Routes
          </CustomButton>
          <CustomButton
            variant="contained"
            disableElevation
            onClick={() => navigate("/bookingview")}
          >
            Bookings
          </CustomButton>
          <CustomButton
            variant="contained"
            disableElevation
            onClick={() => navigate("/accountpage")}
          >
            Account
          </CustomButton>

          <CustomButton
            variant="contained"
            disableElevation
            onClick={() => navigate("/help")}
          >
            Help
          </CustomButton>
        </Stack>
      </div>
    </div>
  );
}
