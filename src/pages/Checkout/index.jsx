import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Logo from "../../components/Logo";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegExp =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const DateRegExp = /^\d{2}-(0[1-9]|1[0-2])$/;

const validationSchema = Yup.object().shape({
  Firstname: Yup.string().required().label("First Name"),
  Lastname: Yup.string().required().label("Last Name"),
  Contactno: Yup.string()
    .required()
    .label("Contact No")
    .matches(phoneRegExp, "Phone number is not valid")
    .length(10),
  Email: Yup.string()
    .required()
    .label("Email")
    .matches(emailRegExp, "Email is not valid"),
  Noofseats: Yup.number()
    .required()
    .label("No of Seats")
    .typeError("you must specify a number")
    .min(0, "Min value 0.")
    .max(30, "Max value 30."),
  name: Yup.string().required().label("Name on card"),
  cardno: Yup.number()
    .required()
    .label("Card Number")
    .typeError("Invalid card number"),
  cvv: Yup.string()
    .required()
    .label("CVV")
    .matches(/^[0-9]{3}$/, "Must be 3 digits"),
  expdate: Yup.string()
    .required()
    .label("Expire Date")
    .matches(DateRegExp, "Invalid date"),
});

const theme = createTheme();

export default function Checkout() {
  const [clickedItem, setClickedItem] = React.useState("EXISTING");

  const handleExistingUserCheckBoxChange = (event) => {
    // console.log("existing user changed");
    if(event.target.checked){
      setClickedItem("EXISTING");
    }else{
      setClickedItem("NEW");
    }
    
  };

  const handleNewUserCheckBoxChange = (event) => {
    // console.log("new user checkbox changed", event.target.checked);
    if (event.target.checked){
      setClickedItem("NEW");
    }
    else{
      setClickedItem("EXISTING");
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      <Container style={{ float: "left", width: "50%" }}>
        <CardMedia
          component="img"
          style={{ height: "300px" }}
          image={require("./busstop.png")}
          alt={"bus"}
        />
        <CardContent>
          <div style={{ textAlign: "center" }}>
            {" "}
            <h3 style={{ display: "inline-block" }}>Bus No</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            {" "}
            <h3 style={{ display: "inline-block" }}>Departure Time</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            {" "}
            <h3 style={{ display: "inline-block" }}>Arrival Time</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            {" "}
            <h3 style={{ display: "inline-block" }}>Price</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            {" "}
            <h3 style={{ display: "inline-block" }}>Contact No</h3>
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

        <Formik
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
            const { errors, handleSubmit, handleChange, touched } = formikProps;

            return (
              <React.Fragment>
                <Grid container spacing={3}>

                  <dev style={{ paddingLeft: 25 }}>
                    <FormControlLabel
                      value="NewUser"
                      control={<Checkbox />}
                      label="New User"
                      labelPlacement="end"
                      onChange={handleNewUserCheckBoxChange}
                    />

                    <FormControlLabel
                      value="ExistingUser"
                      control={<Checkbox value={clickedItem === "EXISITNG"} />}
                      label="Existing User"
                      labelPlacement="end"
                      onChange={handleExistingUserCheckBoxChange}
                    />
                  </dev>

                  {clickedItem!=="EXISTING" && <Grid item xs={12}>
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
                  </Grid>}

{clickedItem!== "EXISTING" &&                 <Grid item xs={12}>
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
                  </Grid>}

                  {clickedItem==="EXISTING" && <Grid item xs={12}>
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
                  </Grid>}

{clickedItem=== "EXISTING" &&                 <Grid item xs={12}>
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
                  </Grid>}

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
        </Formik>
      </Container>
    </ThemeProvider>
  );
}
