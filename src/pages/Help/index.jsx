import React from "react";
import Footer from "../../components/Footer";
import HomePageNavigationBar from "../../components/HomePageNavigationBar";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import HeightBox from "../../components/HeightBox";

export default function Help() {
  const userState = useSelector((state) => state.user);
  return (
    <dev>
      {userState?.auth ? <AccountNavigationBar /> : <HomePageNavigationBar />}
      <h1 style={{ textAlign: "center" }}>CONTACT US</h1>
      <HeightBox height={40} />
      <Stack direction={"row"} spacing={4} justifyContent="center">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <dev style={{ color: "white", textAlign: "center", padding: 20 }}>
            <h1>Email us</h1>
            <br></br>
            <p>help@Eticket.com</p>
          </dev>
        </Box>

        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <dev style={{ color: "white", textAlign: "center", padding: 20 }}>
            <h1>call us</h1>
            <br></br>
            <p>011 1234567</p>
          </dev>
        </Box>
      </Stack>
      <HeightBox height={40} />
      <Footer />
    </dev>
  );
}
