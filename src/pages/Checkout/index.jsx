import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Logo from "../../components/Logo";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import HomePageNavigationBar from "../../components/HomePageNavigationBar";
import AccountNavigationBar from "../../components/AccountNavigationBar";
import HeightBox from "../../components/HeightBox";

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

  const [clickedItem, setClickedItem] = React.useState("EXISTING");

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
              <p>{routeState?.price}</p>
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
          {clickedItem === "EXISTING" && (
            <Formik
              initialValues={{
                username: "",
                password: "",
                noOfSeats: 1,
                nameOnTheCard: "",
                cardNo: "",
                cvv: "",
                expire: "",
              }}
              onSubmit={(values) => {
                // validation completed
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
                      onChange={(event) => handleChange("noOfSeats")(event)}
                    />
                    <HeightBox height={20} />
                    <p>Pay by card</p>
                    <TextField
                      label="Name on the Card"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      error={errors.nameOnTheCard && touched.nameOnTheCard}
                      helperText={errors.nameOnTheCard || ""}
                      onChange={(event) => handleChange("nameOnTheCard")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Card Number"
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
                      size="large"
                      onClick={handleSubmit}
                    >
                      Confirm
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
                cardNo: "",
                cvv: "",
                expire: "",
              }}
              onSubmit={(values) => {
                // validation completed
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
                      error={errors.name && touched.name}
                      helperText={errors.name || ""}
                      onChange={(event) => handleChange("name")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Username"
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
                      onChange={(event) => handleChange("noOfSeats")(event)}
                    />
                    <HeightBox height={10} />
                    <TextField
                      label="Name on the Card"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      error={errors.nameOnTheCard && touched.nameOnTheCard}
                      helperText={errors.nameOnTheCard || ""}
                      onChange={(event) => handleChange("nameOnTheCard")(event)}
                    />
                    <HeightBox height={10} />

                    <TextField
                      label="Card Number"
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
                      size="large"
                      onClick={handleSubmit}
                    >
                      Confirm
                    </Button>
                  </div>
                );
              }}
            </Formik>
          )}

          {/* <Formik
            initialValues={{
              UserName: "",
              Password: "",
              Firstname: "",
              Contactno: "",
              Email: "",
              Noofseats: "",
              name: "",
              cardno: "",
              cvv: "",
              expdate: "",
            }}
            onSubmit={(values) => {
              // Validation success and needs to call backend
              const data = {
                UserName: values.UserName,
                UserName: values.Password,
                Firstname: values.Firstname,
                Contactno: values.Contactno,
                Email: values.Email,
                Noofseats: values.Noofseats,
                name: values.name,
                cardno: values.cardno,
                cvv: values.cvv,
                expdate: values.expdate,
                userType: "CUSTOMER",
              };
              //registerUser(data);
            }}
            validationSchema={validationSchema}
          >
            {(formikProps) => {
              const { errors, handleSubmit, handleChange, touched } =
                formikProps;

              return (
                <React.Fragment>
                  <Grid container spacing={3}>
                    <dev style={{ paddingLeft: 25 }}>
                      <FormControlLabel
                        value="NewUser"
                        control={<Checkbox checked={clickedItem === "NEW"} />}
                        label="New User"
                        labelPlacement="end"
                        onChange={handleNewUserCheckBoxChange}
                      />

                      <FormControlLabel
                        value="ExistingUser"
                        control={
                          <Checkbox checked={clickedItem === "EXISTING"} />
                        }
                        label="Existing User"
                        labelPlacement="end"
                        onChange={handleExistingUserCheckBoxChange}
                      />
                    </dev>

                    {clickedItem !== "EXISTING" && (
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="outlined-required"
                          color="secondary"
                          label="Name"
                          defaultValue=""
                          fullWidth
                          error={errors.Firstname && touched.Fisrtname}
                          helperText={errors.Firstname || ""}
                          onChange={(event) => handleChange("Firstname")(event)}
                        />
                      </Grid>
                    )}

                    {clickedItem !== "EXISTING" && (
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="outlined-required"
                          color="secondary"
                          label="Contact No"
                          defaultValue=""
                          error={errors.Contactno && touched.Contactno}
                          helperText={errors.Contactno || ""}
                          onChange={(event) => handleChange("Contactno")(event)}
                        />
                      </Grid>
                    )}

                    {clickedItem === "EXISTING" && (
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="outlined-required"
                          color="secondary"
                          label="User Name"
                          defaultValue=""
                          fullWidth
                          error={errors.Firstname && touched.Fisrtname} //this should change
                          helperText={errors.Firstname || ""}
                          onChange={(event) => handleChange("Firstname")(event)}
                        />
                      </Grid>
                    )}

                    {clickedItem === "EXISTING" && (
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="outlined-required"
                          color="secondary"
                          label="Password"
                          defaultValue=""
                          error={errors.Contactno && touched.Contactno} //this should change
                          helperText={errors.Contactno || ""}
                          onChange={(event) => handleChange("Contactno")(event)}
                        />
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <TextField
                        required
                        id="outlined-required"
                        color="secondary"
                        label="Email"
                        fullWidth
                        defaultValue=""
                        error={errors.Email && touched.Email}
                        helperText={errors.Email || ""}
                        onChange={(event) => handleChange("Email")(event)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        id="outlined-number"
                        label="Number of Seats"
                        color="secondary"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        error={errors.Noofseats && touched.Noofseats}
                        helperText={errors.Noofseats || ""}
                        onChange={(event) => handleChange("Noofseats")(event)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Name on card"
                        fullWidth
                        color="secondary"
                        error={errors.name && touched.name}
                        helperText={errors.name || ""}
                        onChange={(event) => handleChange("name")(event)}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Card Number"
                        fullWidth
                        color="secondary"
                        error={errors.cardno && touched.cardno}
                        helperText={errors.cardno || ""}
                        onChange={(event) => handleChange("cardno")(event)}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Exp Date"
                        fullWidth
                        color="secondary"
                        error={errors.expdate && touched.expdate}
                        helperText={errors.expdate || ""}
                        onChange={(event) => handleChange("expdate")(event)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="outlined-required"
                        label="CVV"
                        fullWidth
                        color="secondary"
                        error={errors.cvv && touched.cvv}
                        helperText={errors.cvv || ""}
                        onChange={(event) => handleChange("cvv")(event)}
                      />
                    </Grid>

                    <Grid style={{ paddingTop: "24px", paddingLeft: "24px" }}>
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        //disabled={loading}
                        style={{}}
                      >
                        Confirm
                      </Button>
                    </Grid>
                  </Grid>
                </React.Fragment>
              );
            }}
          </Formik> */}
        </Container>
      </Stack>
    </div>
  );
}
