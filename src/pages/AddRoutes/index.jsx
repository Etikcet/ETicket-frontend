import React, { useState } from "react";
import Button from "@mui/material/Button";
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
  arrivalTime: Yup.string().required().label("Arrival Time"),
  departureTime: Yup.string().required().label("Departure Time"),
  price: Yup.number().required().label("Price"),
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
      busNumber: values.busId,
      start: values.start,
      finish: values.end,
      arrivalTime: values.arrivalTime,
      departureTime: values.departureTime,
      price: values.price,
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
      <HeightBox height={10} />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
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
              arrivalTime: "",
              departureTime: "",
              price: "",
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
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="time"
                    label="Arrival Time"
                    value={values.arrivalTime}
                    InputLabelProps={{ shrink: true }}
                    error={touched.arrivalTime && errors.arrivalTime}
                    helperText={touched.arrivalTime ? errors.arrivalTime : ""}
                    onChange={handleChange("arrivalTime")}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="time"
                    label="Departure Time"
                    value={values.departureTime}
                    InputLabelProps={{ shrink: true }}
                    error={touched.departureTime && errors.departureTime}
                    helperText={
                      touched.departureTime ? errors.departureTime : ""
                    }
                    onChange={handleChange("departureTime")}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Price"
                    error={touched.price && errors.price}
                    helperText={touched.price ? errors.price : ""}
                    value={values.price}
                    onChange={handleChange("price")}
                  />
                  <HeightBox height={10} />
                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    disabled={loading}
                    style={{ height: 50 }}
                    fullWidth
                    variant="contained"
                  >
                    {loading ? <CircularProgress /> : " Add Route"}
                  </Button>
                  <HeightBox height={10} />
                  <Button
                    fullWidth
                    disabled={loading}
                    style={{ height: 50 }}
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
          <HeightBox height={40} />
        </Box>
      </Container>
    </div>
  );
}
