import React from "react";
import Logo from "../../components/Logo";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SIGNUP_IMAGE from "../../assets/signup-image.svg";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import * as Yup from "yup";

const CustomTextField = styled(TextField)({
  width: 450,
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  userName: Yup.string().required().label("User Name").min(3).max(36),
  phoneNumber: Yup.number().required().label("Phone Number").max(10),
  password: Yup.string()
    .required()
    .min(8)
    .max(15)
    .label("Password")
    .matches(/\d+/, "Password should contain at least one number")
    .matches(
      /[a-z]+/,
      "Password should contain at least one lowercase character"
    )
    .matches(
      /[A-Z]+/,
      "Passoword should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
              <Formik
                initialValues={{
                  name: "",
                  userName: "",
                  password: "",
                  confirmPassword: "",
                  phoneNumber: "",
                }}
                onSubmit={(values) => {
                  // Validation success and needs to call backend
                }}
                validationSchema={validationSchema}
              >
                {(formikProps) => {
                  const { errors, handleSubmit, handleChange, touched } =
                    formikProps;

                  return (
                    <React.Fragment>
                      <CustomTextField
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        error={errors.name && touched.name}
                        helperText={errors.name || ""}
                        onChange={(event) => handleChange("name")(event)}
                      />

                      <CustomTextField
                        label="Username"
                        variant="outlined"
                        color="secondary"
                        error={errors.userName && touched.userName}
                        helperText={errors.userName || ""}
                        onChange={(event) => handleChange("userName")(event)}
                      />

                      <CustomTextField
                        label="Phone Number"
                        variant="outlined"
                        color="secondary"
                        error={errors.phoneNumber && touched.phoneNumber}
                        helperText={errors.phoneNumber || ""}
                        onChange={(event) => handleChange("phoneNumber")(event)}
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

                      <CustomTextField
                        label="Confirm Password"
                        variant="outlined"
                        color="secondary"
                        type="password"
                        error={
                          errors.confirmPassword && touched.confirmPassword
                        }
                        helperText={errors.confirmPassword || ""}
                        onChange={(event) =>
                          handleChange("confirmPassword")(event)
                        }
                      />

                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </Button>
                    </React.Fragment>
                  );
                }}
              </Formik>
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
