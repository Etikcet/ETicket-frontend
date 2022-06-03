import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HeightBox from "../../components/HeightBox";

const validationSchema = Yup.object().shape({
  busId: Yup.string().required().label("Bus Id"),
  start: Yup.string().required().label("Starting Station"),
  end: Yup.string().required().label("Ending Station"),
});

export default function AddRoute() {
  const navigate = useNavigate();

  return (
    <div>
      <AccountNavigationBar />
      <HeightBox height={40} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" textAlign="left">
            Add Route
          </Typography>
          <Formik
            initialValues={{
              busId: "",
              start: "",
              end: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validationSchema}
          >
            {({ errors, handleSubmit, handleChange, touched }) => {
              console.log(errors);
              console.log("Touc: ", touched);
              return (
                <React.Fragment>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    error={touched.busId && errors.busId}
                    helperText={errors.busId}
                    label="Bus ID"
                    onChange={handleChange("busId")}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="station1"
                    label="Starting Station"
                    error={touched.start && errors.start}
                    helperText={errors.start}
                    onChange={handleChange("start")}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Ending Station"
                    error={touched.end && errors.end}
                    helperText={errors.end}
                    onChange={handleChange("end")}
                  />

                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 1 }}
                  >
                    Add Route
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    onClick={() => navigate("/addroutes")}
                    variant="contained"
                    sx={{ mt: 2, mb: 1 }}
                    href="../../BusRoutes"
                  >
                    Back
                  </Button>
                </React.Fragment>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </div>
  );
}
