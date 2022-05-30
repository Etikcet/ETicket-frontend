import React from "react";
import Logo from "../../components/Logo";
import TextField from "@mui/material/TextField";
import WhiteSpace from "../../components/WhiteSpace";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SIGNUP_IMAGE from "../../assets/signup-image.svg";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";

const CustomTextField = styled(TextField)({
  width: 450,
});

export default function SignUp() {
  return (
    <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
      <Logo />
      <HeightBox height={50} />
      <Stack direction="row" spacing={15}>
        <div>
          <img src={SIGNUP_IMAGE} alt="" style={{ width: "40vw" }} />
        </div>
        <div>
          <form action="">
            <h2 style={{ fontSize: 48, fontFamily: "Lato", margin: 0 }}>
              Welcome to Eticket!
            </h2>
            <p style={{ color: "rgba(0,0,0,0.5)" }}>
              Fill these details to sign up
            </p>
            <Stack direction="column" spacing={2}>
              <CustomTextField
                label="Name"
                variant="outlined"
                color="secondary"
              />

              <CustomTextField
                label="Email or Username"
                variant="outlined"
                color="secondary"
                type="email"
              />

              <CustomTextField
                label="Phone Number"
                variant="outlined"
                color="secondary"
              />

              <CustomTextField
                label="Password"
                variant="outlined"
                color="secondary"
                type="password"
              />

              <CustomTextField
                label="Confirm Password"
                variant="outlined"
                color="secondary"
                type="password"
              />

              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
                fullWidth
                InputProps={{ style: { fontSize: 10 } }}
                InputLabelProps={{ style: { fontSize: 10 } }}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
          <HeightBox height={15} />
          <div style={{ fontSize: 15, width: 450 }}>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <p style={{ margin: 0 }}>Already have an account?</p>
              <Link href="#" underline="hover" color="black">
                Sign In
              </Link>
            </Stack>
          </div>
        </div>
      </Stack>
    </div>
  );
}
