import React from "react";
import Logo from "../../components/Logo";
import SignUpImageDiv from "../../components/SignUpImage";
import TextField from "@mui/material/TextField";
import WhiteSpace from "../../components/WhiteSpace";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function SignUp() {
  const signUpFormStyle = {
    padding: "1%",
    top: "10%",
    position: "absolute",
    width: "30%",
    height: "80%",
    left: "60%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // fontSize: "10px",
  };
  return (
    <div>
      <Logo />
      <SignUpImageDiv />
      <div style={signUpFormStyle}>
        <form action="">
          <h2 style={{ top: "0px" }}>Welcome to Eticket!</h2>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            color="secondary"
            fullWidth
            // style={{ height: 10 }}
            InputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
          />
          <WhiteSpace />
          <TextField
            label="Email(Username)"
            variant="outlined"
            size="small"
            color="secondary"
            type="email"
            fullWidth
            InputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
          />
          <WhiteSpace />
          <TextField
            label="Phone Number"
            variant="outlined"
            size="small"
            color="secondary"
            // type="number"
            fullWidth
            InputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
          />
          <WhiteSpace />
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            color="secondary"
            type="password"
            fullWidth
            InputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
          />
          <WhiteSpace />
          <TextField
            label="Confirm Password"
            variant="outlined"
            size="small"
            color="secondary"
            type="password"
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
            InputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
          >
            Sign Up
          </Button>
        </form>
        <WhiteSpace />
        <div style={{ fontSize: 10 }}>
          Already have an account?{" "}
          <Link href="#" underline="hover">
            {"Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
}
