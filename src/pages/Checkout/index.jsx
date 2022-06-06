import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import HomePageNavigationBar from "../../components/HomePageNavigationBar";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import HeightBox from "../../components/HeightBox";
import api from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import SnackBarComponent from "../../components/SnackBarComponent";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchemaNewUser = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().label("Username"),
  phoneNumber: Yup.string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid")
    .length(10),
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
      "Password should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),

  noOfSeats: Yup.number().min(1).required().label("Number of Seats"),
  nameOnTheCard: Yup.string().required().label("Name on card"),
  cardNo: Yup.number().required().label("Card Number"),
  date: Yup.string().required().label("Date"),
  cvv: Yup.string()
    .required()
    .label("CVV")
    .matches(/^[0-9]{3}$/, "Must be 3 digits"),
  expire: Yup.string().required().label("Expire Date"),
});

const validationSchemaExisitingUser = Yup.object().shape({
  username: Yup.string().required().label("Username"),
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
      "Password should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),

  noOfSeats: Yup.number().min(1).required().label("Number of Seats"),
  date: Yup.string().required().label("Date"),
  nameOnTheCard: Yup.string().required().label("Name on card"),
  cardNo: Yup.number().required().label("Card Number"),
  cvv: Yup.string()
    .required()
    .label("CVV")
    .matches(/^[0-9]{3}$/, "Must be 3 digits"),
  expire: Yup.string().required().label("Expire Date"),
});

export default function Checkout() {
  const userState = useSelector((state) => state?.user);
  const routeState = useSelector((state) => state?.route);
  const [seatPrice, setSeatPrice] = React.useState(routeState?.price);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const [clickedItem, setClickedItem] = React.useState(
    userState?.auth ? "EXISTING" : "NEW"
  );

  async function addBooking(details, actions) {
    try {
      const [code, res] = await api.booking.addBooking(details);
      console.log("Code: ", code, res);
      if (code === 201) {
        setSnackMessage({
          type: "success",
          message: "Booking Added succesfully!",
        });
        setOpenSnackBar(true);
        actions.resetForm();
      }
      setLoading(false);
    } catch (error) {
      // Error in adding the booking
      setSnackMessage({
        type: "error",
        message: "Error in adding the booking",
      });
      setOpenSnackBar(true);
      setLoading(false);
    }
  }

  async function checkUser(values, actions) {
    setLoading(true);
    if (clickedItem === "NEW") {
      // Need to register the user and add the booking
      const data = {
        name: values.name,
        username: values.username,
        password: values.password,
        phoneNumber: values.phoneNumber,
        userType: "CUSTOMER",
      };
      try {
        const [code, res] = await api.user.registerUser(data);
        if (code === 201) {
          // User registation completed
          const user = res.data.user;
          const userId = user?.ID;
          const data = {
            userId: userId,
            routeId: routeState.ID,
            price: seatPrice,
            status: "PENDING",
            date: values.date,
            seats: values.noOfSeats,
          };
          addBooking(data, actions);
        } else {
          setSnackMessage({
            type: "error",
            message: "Error in registering the user!",
          });
          setOpenSnackBar(true);
        }
        setLoading(false);
      } catch (error) {
        // Error occured while registering the user
        setSnackMessage({
          type: "error",
          message: "Error in registering the user!",
        });
        setOpenSnackBar(true);
        setLoading(false);
      }
    } else {
      // Validate the user and add the booking if user is validated
      const data = {
        username: values.username,
        password: values.password,
      };

      try {
        const [code, res] = await api.user.signinUser(data);
        if (code === 200) {
          const userId = res?.data?.user?.id;

          const data = {
            userId: userId,
            routeId: routeState.ID,
            price: seatPrice,
            status: "PENDING",
            date: values.date,
            seats: values.noOfSeats,
          };
          addBooking(data, actions);
        } else {
          setSnackMessage({
            type: "error",
            message: "Error in signing the user!",
          });
          setOpenSnackBar(true);
        }
        setLoading(false);
      } catch (error) {
        setSnackMessage({
          type: "error",
          message: "Error in signing the user!",
        });
        setOpenSnackBar(true);
        setLoading(false);
      }
    }
  }

  const handleExistingUserCheckBoxChange = (event) => {
    // console.log("existing user changed");
    if (event.target.checked) {
      setClickedItem("EXISTING");
    } else {
      setClickedItem("NEW");
    }
  };

  const handleNewUserCheckBoxChange = (event) => {
    // console.log("new user checkbox changed", event.target.checked);
    if (event.target.checked) {
      setClickedItem("NEW");
    } else {
      setClickedItem("EXISTING");
    }
  };

  return (
    <div>
      <SnackBarComponent
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        message={snackMessage.message}
        type={snackMessage.type}
      />
      {userState?.auth ? <AccountNavigationBar /> : <HomePageNavigationBar />}
      <Stack direction="row">
        <Container
          style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}
        >
          <CardMedia
            component="img"
            style={{ height: "300px" }}
            image={require("./busstop.png")}
            alt={"bus"}
          />
          <CardContent>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: 0 }}>Bus No</h3>
              <p>{routeState?.busId}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: 0 }}>
                Departure Time
              </h3>
              <p>{routeState?.departureTime}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: 0 }}>
                Arrival Time
              </h3>
              <p>{routeState?.arrivalTime}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: 0 }}>Price</h3>
              <p>{seatPrice}</p>
            </div>
          </CardContent>
        </Container>

        <Container
          component="main"
          maxWidth="sm"
          sx={{ mb: 4 }}
          style={{ float: "right", marginRight: "100px" }}
        >
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 3 } }}
            style={{ borderColor: "#9C27B0", backgroundColor: "#9c27b0" }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color={"white"}
            >
              Checkout
            </Typography>
          </Paper>
          {!userState?.auth && (
            <div>
              <FormControlLabel
                value="NewUser"
                control={<Checkbox checked={clickedItem === "NEW"} />}
                label="New User"
                labelPlacement="end"
                onChange={handleNewUserCheckBoxChange}
              />

              <FormControlLabel
                value="ExistingUser"
                control={<Checkbox checked={clickedItem === "EXISTING"} />}
                label="Existing User"
                labelPlacement="end"
                onChange={handleExistingUserCheckBoxChange}
              />
            </div>
          )}
          {clickedItem === "EXISTING" && (
            <Formik
              initialValues={{
                username: userState?.username || "",
                password: "",
                noOfSeats: 1,
                nameOnTheCard: "",
                date: "",
                cardNo: "",
                cvv: "",
                expire: "",
              }}
              onSubmit={(values, actions) => {
                // validation completed
                checkUser(values, actions);
              }}
              validationSchema={validationSchemaExisitingUser}
            >
              {(formikProps) => {
                const { errors, handleSubmit, handleChange, touched, values } =
                  formikProps;

                return (
                  <div>
                    <HeightBox height={20} />
                    <TextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      color="secondary"
                      value={values.username}
                      error={errors.username && touched.username}
                      helperText={errors.userName || ""}
                      onChange={(event) => handleChange("username")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      value={values.password}
                      type="password"
                      error={errors.password && touched.password}
                      helperText={errors.password || ""}
                      onChange={(event) => handleChange("password")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Number of Seats"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      type="number"
                      value={values.noOfSeats}
                      error={errors.noOfSeats && touched.noOfSeats}
                      helperText={errors.noOfSeats || ""}
                      onChange={(event) => {
                        handleChange("noOfSeats")(event);
                        setSeatPrice(routeState?.price * event.target.value);
                      }}
                    />
                    <HeightBox height={20} />
                    <TextField
                      label="Booking Date"
                      variant="outlined"
                      fullWidth
                      type="date"
                      color="secondary"
                      value={values.date}
                      InputLabelProps={{ shrink: true }}
                      error={errors.date && touched.date}
                      helperText={errors.date || ""}
                      onChange={(event) => handleChange("date")(event)}
                    />
                    <HeightBox height={20} />
                    <p>Pay by card</p>
                    <TextField
                      label="Name on the Card"
                      variant="outlined"
                      value={values.nameOnTheCard}
                      color="secondary"
                      fullWidth
                      error={errors.nameOnTheCard && touched.nameOnTheCard}
                      helperText={errors.nameOnTheCard || ""}
                      onChange={(event) => handleChange("nameOnTheCard")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Card Number"
                      value={values.cardNo}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      error={errors.cardNo && touched.cardNo}
                      helperText={errors.cardNo || ""}
                      onChange={(event) => handleChange("cardNo")(event)}
                    />
                    <HeightBox height={10} />
                    <Stack direction="row" spacing={2}>
                      <TextField
                        label="CVV"
                        variant="outlined"
                        color="secondary"
                        value={values.cvv}
                        fullWidth
                        error={errors.cvv && touched.cvv}
                        helperText={errors.cvv || ""}
                        onChange={(event) => handleChange("cvv")(event)}
                      />
                      <TextField
                        label="Expiry"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        type="date"
                        value={values.expire}
                        error={errors.expire && touched.expire}
                        helperText={errors.expire || ""}
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => handleChange("expire")(event)}
                      />
                    </Stack>
                    <HeightBox height={20} />
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading ? <CircularProgress /> : "Confirm"}
                    </Button>
                  </div>
                );
              }}
            </Formik>
          )}
          {clickedItem === "NEW" && (
            <Formik
              initialValues={{
                name: "",
                username: "",
                phoneNumber: "",
                password: "",
                noOfSeats: 1,
                nameOnTheCard: "",
                date: "",
                cardNo: "",
                cvv: "",
                expire: "",
              }}
              onSubmit={(values, actions) => {
                // validation completed
                checkUser(values, actions);
              }}
              validationSchema={validationSchemaNewUser}
            >
              {(formikProps) => {
                const { errors, handleSubmit, handleChange, touched, values } =
                  formikProps;

                return (
                  <div>
                    <HeightBox height={20} />
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      color="secondary"
                      value={values.name}
                      error={errors.name && touched.name}
                      helperText={errors.name || ""}
                      onChange={(event) => handleChange("name")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Username"
                      value={values.username}
                      variant="outlined"
                      fullWidth
                      color="secondary"
                      error={errors.username && touched.username}
                      helperText={errors.userName || ""}
                      onChange={(event) => handleChange("username")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Phone Number"
                      value={values.phoneNumber}
                      variant="outlined"
                      fullWidth
                      color="secondary"
                      error={errors.phoneNumber && touched.phoneNumber}
                      helperText={errors.phoneNumber || ""}
                      onChange={(event) => handleChange("phoneNumber")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      value={values.password}
                      fullWidth
                      type="password"
                      error={errors.password && touched.password}
                      helperText={errors.password || ""}
                      onChange={(event) => handleChange("password")(event)}
                    />

                    <HeightBox height={20} />
                    <p>Pay by card</p>

                    <HeightBox height={10} />
                    <TextField
                      label="Number of Seats"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      type="number"
                      value={values.noOfSeats}
                      error={errors.noOfSeats && touched.noOfSeats}
                      helperText={errors.noOfSeats || ""}
                      onChange={(event) => {
                        handleChange("noOfSeats")(event);
                        setSeatPrice(routeState?.price * event.target.value);
                      }}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Booking Date"
                      variant="outlined"
                      fullWidth
                      value={values.date}
                      type="date"
                      color="secondary"
                      InputLabelProps={{ shrink: true }}
                      error={errors.date && touched.date}
                      helperText={errors.date || ""}
                      onChange={(event) => handleChange("date")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Name on the Card"
                      variant="outlined"
                      color="secondary"
                      value={values.nameOnTheCard}
                      fullWidth
                      error={errors.nameOnTheCard && touched.nameOnTheCard}
                      helperText={errors.nameOnTheCard || ""}
                      onChange={(event) => handleChange("nameOnTheCard")(event)}
                    />
                    <HeightBox height={10} />

                    <TextField
                      label="Card Number"
                      variant="outlined"
                      value={values.cardNo}
                      color="secondary"
                      fullWidth
                      error={errors.cardNo && touched.cardNo}
                      helperText={errors.cardNo || ""}
                      onChange={(event) => handleChange("cardNo")(event)}
                    />
                    <HeightBox height={10} />
                    <Stack direction="row" spacing={2}>
                      <TextField
                        label="CVV"
                        variant="outlined"
                        value={values.cvv}
                        color="secondary"
                        fullWidth
                        error={errors.cvv && touched.cvv}
                        helperText={errors.cvv || ""}
                        onChange={(event) => handleChange("cvv")(event)}
                      />
                      <TextField
                        label="Expiry"
                        variant="outlined"
                        color="secondary"
                        value={values.expire}
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        fullWidth
                        error={errors.expire && touched.expire}
                        helperText={errors.expire || ""}
                        onChange={(event) => handleChange("expire")(event)}
                      />
                    </Stack>
                    <HeightBox height={20} />
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      fullWidth
                      disabled={loading}
                      size="large"
                      onClick={handleSubmit}
                    >
                      {loading ? <CircularProgress /> : "Confirm"}
                    </Button>
                  </div>
                );
              }}
            </Formik>
          )}
        </Container>
      </Stack>
    </div>
  );
}
