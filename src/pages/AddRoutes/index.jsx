import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import * as Yup from "yup";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import SnackBarComponent from "../../components/SnackBarComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HeightBox from "../../components/HeightBox";
import api from "../../api";

const validationSchema = Yup.object().shape({
  busId: Yup.string().required().label("Bus Id"),
  start: Yup.string().required().label("Starting Station"),
  end: Yup.string().required().label("Ending Station"),
});

export default function AddRoute() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    message: "",
    type: "",
  });
  const navigate = useNavigate();

  async function addRoute(values) {
    setLoading(true);
    const data = {
      ID: values.busId,
      start: values.start,
      finish: values.end,
    };
    try {
      const res = await api.route.addRoute(data);
      const resData = res[1];
      setLoading(false);
      if (resData?.statusCode === 201) {
        setSnackMessage({
          type: "success",
          message: "Succesfully added the route!",
        });
        setOpenSnackBar(true);
        return true;
      } else {
        // Error in adding the route
        setSnackMessage({
          type: "error",
          message: "Error in adding the route",
        });
        setOpenSnackBar(true);
        return false;
      }
    } catch (error) {
      setLoading(false);
      // Error in adding the route
      setSnackMessage({
        type: "error",
        message: "Error in adding the route",
      });
      setOpenSnackBar(true);
      return false;
    }
  }

  return (
    <div>
      <SnackBarComponent
        open={openSnackBar}
        message={snackMessage.message}
        type={snackMessage.type}
        setOpen={setOpenSnackBar}
      />
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
            onSubmit={(values, actions) => {
              addRoute(values).then((res) => {
                if (res) {
                  actions.resetForm();
                }
              });
            }}
            validationSchema={validationSchema}
          >
            {({ errors, handleSubmit, handleChange, touched, values }) => {
              return (
                <React.Fragment>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    error={touched.busId && errors.busId}
                    helperText={touched.busId ? errors.busId : ""}
                    value={values.busId}
                    label="Bus ID"
                    onChange={handleChange("busId")}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="station1"
                    label="Starting Station"
                    error={touched.start && errors.start}
                    helperText={touched.start ? errors.start : ""}
                    value={values.start}
                    onChange={handleChange("start")}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Ending Station"
                    error={touched.end && errors.end}
                    helperText={touched.end ? errors.end : ""}
                    value={values.end}
                    onChange={handleChange("end")}
                  />

                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    disabled={loading}
                    fullWidth
                    variant="contained"
                  >
                    {loading ? <CircularProgress /> : " Add Route"}
                  </Button>
                  <HeightBox height={20} />
                  <Button
                    fullWidth
                    disabled={loading}
                    onClick={() => navigate("/addroutes")}
                    variant="contained"
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
