import React from "react";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import DASHBOARD_IMAGE from "../../assets/dashboard-image.svg";
import Footer from "../../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Account() {
  var name = "Tim Tim";
  var email = "tim@gmail.com";
  var phoneNo = "0123456789";
  var userName = "timz";

  return (
    <Stack direction="column" justifyContent="center" spacing="10">
      <AccountNavigationBar />
      <HeightBox height={20}></HeightBox>
      <div style={{ paddingLeft: 100 }}>
        <Stack direction="row" spacing={15}>
          <Card sx={{ width: 450, height: 450 }}>
            <CardContent>
              <Stack direction="column" spacing={2}>
                <div style={{ paddingLeft: 20 }}>
                  <Avatar {...stringAvatar(name)} />
                </div>

                <Typography
                  sx={{ fontSize: 48, fontWeight: "bold", color: "#000" }}
                >
                  {name}
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  <AccountCircleIcon fontSize="large" />
                  {userName}
                </Typography>

                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  <EmailIcon fontSize="large" />
                  {email}
                </Typography>

                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  <PhoneIcon fontSize="large" />
                  {phoneNo}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <div>
            <img
              src={DASHBOARD_IMAGE}
              alt=""
              style={{ width: "35vw", paddingLeft: "80px", paddingTop: "40px" }}
            />
          </div>
        </Stack>
      </div>
      <Footer />
    </Stack>
  );
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      height: "100px",
      width: "100px",
      fontSize: 48,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
