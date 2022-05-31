import React, { useState } from "react";
import Logo from "../../components/Logo";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import LOGIN_IMAGE from "../../assets/login-image.svg";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import * as Yup from "yup";
import { signUpRequest } from "../../reducers/user";
import SnackBarComponent from "../../components/SnackBarComponent";
import api from "../../api";
import { TOKEN_KEY } from "../../constants";
import Footer from "../../components/Footer";

const CustomTextField = styled(TextField)({
  width: 350,
});

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().label("User Name"),
  password: Yup.string().required().label("Password"),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  async function loginUser(values) {}

  return (
    <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
      <SnackBarComponent
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        type={snackMessage.type}
        message={snackMessage.message}
      />
      <Logo />
      <HeightBox height={30} />
      <Stack direction="row" spacing={15}>
        <div style={{ paddingLeft: "100px" }}>
          <h2 style={{ fontSize: 48, fontFamily: "Lato", margin: 0 }}>
            Welcome Back!
          </h2>
          <p style={{ color: "rgba(0,0,0,0.5)" }}>
            Enter your details to login
          </p>
          <Stack direction="column" spacing={2}>
            <Formik
              initialValues={{
                userName: "",
                password: "",
              }}
              onSubmit={(values) => {
                // Validation success and needs to call backend
                const data = {
                  username: values.userName,
                  password: values.password,
                  // userType: "CUSTOMER",
                };
                loginUser(data);
              }}
              validationSchema={validationSchema}
            >
              {(formikProps) => {
                const { errors, handleSubmit, handleChange, touched } =
                  formikProps;

                return (
                  <React.Fragment>
                    <CustomTextField
                      label="Username"
                      variant="outlined"
                      color="secondary"
                      error={errors.userName && touched.userName}
                      helperText={errors.userName || ""}
                      onChange={(event) => handleChange("userName")(event)}
                    />

                    <CustomTextField
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      type="password"
                      error={errors.password && touched.password}
                      helperText={errors.password || ""}
                      onChange={(event) => handleChange("password")(event)}
                    />

                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? <CircularProgress /> : "Sign In"}
                    </Button>
                  </React.Fragment>
                );
              }}
            </Formik>
          </Stack>

          <HeightBox height={15} />
          <div style={{ fontSize: 15, width: 350 }}>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <p style={{ margin: 0 }}>Don't have an account?</p>
              <Link href="/signup" underline="hover" color="black">
                Sign Up
              </Link>
            </Stack>
          </div>
          <HeightBox height={15} />
        </div>
        <div style={{ padding: "50px" }}>
          <img src={LOGIN_IMAGE} alt="" style={{ width: "40vw" }} />
        </div>
      </Stack>
      <Footer />
    </div>
  );
}
