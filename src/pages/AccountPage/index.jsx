import React from "react";
import HomeNavigationBar from "../../components/HomeNavigationBar";
import SignUpImageDiv from "../../components/SignUpImage";
import { Avatar } from "@mui/material";
import WhiteSpace from "../../components/WhiteSpace";
import TextField from "@mui/material/TextField";

export default function Account() {
  var name = "Tim Tim";
  var email = "tim@gmail.com";
  var phoneNo = "0123456789";

  const divStyle = {
    padding: "1%",
    top: "20%",
    position: "absolute",
    width: "30%",
    height: "60%",
    left: "60%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // fontSize: "10px",
    border: "5px solid #9c27b0",
  };
  return (
    <div>
      {/* <HomeNavigationBar /> */}
      <SignUpImageDiv />
      <div style={divStyle}>
        <Avatar {...stringAvatar(name)} />
        <WhiteSpace />
        <WhiteSpace />
        <TextField
          id="name"
          label="Name"
          color="secondary"
          size="small"
          fullWidth
          defaultValue={name}
          InputProps={{
            readOnly: true,
          }}
        />
        <WhiteSpace />
        <TextField
          id="email"
          label="email(username)"
          color="secondary"
          size="small"
          fullWidth
          defaultValue={email}
          InputProps={{
            readOnly: true,
          }}
        />
        <WhiteSpace />
        <TextField
          id="phoneNo"
          label="Phone Number"
          color="secondary"
          size="small"
          fullWidth
          defaultValue={phoneNo}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </div>
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
