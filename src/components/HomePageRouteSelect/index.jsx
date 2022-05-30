import React from "react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#FF6584",
  backgroundColor: "#fff",
  borderRadius: 0,
});

export default function HomePageRouteSelect() {
  return (
    <div style={{ marginTop: -120 }}>
      <div
        style={{
          maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack direction="row">
          <CustomButton>Booking</CustomButton>
          <CustomButton>Routes</CustomButton>
        </Stack>
      </div>

      <div
        style={{
          maxWidth: 1280,
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#fff",
          boxShadow: "6px 10px 30px -8px rgba(0, 0, 0, 0.1)",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,

          borderTopRightRadius: 10,
          height: 250,
        }}
      ></div>
    </div>
  );
}
