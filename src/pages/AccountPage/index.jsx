import React from "react";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import { Avatar } from "@mui/material";
import WhiteSpace from "../../components/WhiteSpace";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import { styled } from "@mui/system";
import SIGNUP_IMAGE from "../../assets/signup-image.svg";
import Footer from "../../components/Footer";

export default function Account() {
  var name = "Tim Tim";
  var email = "tim@gmail.com";
  var phoneNo = "0123456789";

  const CustomTextField = styled(TextField)({
    width: 450,
  });

  return (
    <Stack direction="column" justifyContent="center" spacing="10">
      <AccountNavigationBar />

      <div style={{ paddingLeft: 100 }}>
        <Stack direction="row" spacing={15}>
          <Stack direction="column" justifyContent="center" spacing={2}>
            <Avatar {...stringAvatar(name)} />
            <HeightBox height={20} />
            <CustomTextField
              id="name"
              label="Name"
              color="secondary"
              defaultValue={name}
              InputProps={{
                readOnly: true,
              }}
            />
            <CustomTextField
              id="email"
              label="email(username)"
              color="secondary"
              defaultValue={email}
              InputProps={{
                readOnly: true,
              }}
            />
            <CustomTextField
              id="phoneNo"
              label="Phone Number"
              color="secondary"
              defaultValue={phoneNo}
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>
          <div>
            <img
              src={SIGNUP_IMAGE}
              alt=""
              style={{ width: "30vw", paddingLeft: "80px", paddingTop: "80px" }}
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
