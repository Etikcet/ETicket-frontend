import React from "react";
import Logo from "../../components/Logo/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WhiteSpace from "../../components/WhiteSpace";
import ImageDiv from "../../components/ImageDiv";
import Link from "@mui/material/Link";

export default function SignIn() {
  const loginFormStyle = {
    padding: "1%",
    top: "20%",
    position: "absolute",
    width: "30%",
    height: "70%",
    left: "5%",
  };
  return (
    <>
      <Logo />
      <div style={loginFormStyle}>
        <form>
          <div>
            <h1>Welcome Back!</h1>
            <label style={{ fontSize: 10 }}>Enter your details to login</label>
            <WhiteSpace />
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              color="secondary"
              fullWidth
              InputProps={{ style: { fontSize: 10 } }}
              InputLabelProps={{ style: { fontSize: 10 } }}
            />
            <WhiteSpace />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              color="secondary"
              size="small"
              fullWidth
              InputProps={{ style: { fontSize: 10 } }}
              InputLabelProps={{ style: { fontSize: 10 } }}
            />
            <WhiteSpace />
            <Button
              type="submit"
              color="secondary"
              size="small"
              variant="contained"
              fullWidth
            >
              Sign In
            </Button>
            <WhiteSpace />
          </div>
        </form>
        <div style={{ fontSize: 10 }}>
          Don't have an account?{" "}
          <Link href="#" underline="hover">
            {"Sign Up"}
          </Link>
        </div>
      </div>
      <ImageDiv />
    </>
  );
}
