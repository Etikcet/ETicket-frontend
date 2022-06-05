import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from "formik";
import * as Yup from "yup";

const DateRegExp = 
/^\d{2}-(0[1-9]|1[0-2])$/

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name on card"),
  cardno: Yup.number().required().label("Last Name")
          .typeError("Invalid card number"),
  cvv: Yup.string().matches(/^[0-9]{3}$/, 'Must be 3 digits'),
  expdate: Yup.string().required()
    .matches(DateRegExp, "Invalid date")

});


export default function PaymentForm() {
  return (

    <Formik
    initialValues={{
      name: "",
      cardno: "",
      cvv:"", 
      expdate:"" 
    }}

    onSubmit={(values) => {
      // Validation success and needs to call backend
      const data = {
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

    return(
      <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Payment method
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="outlined-required"
          label="Name on card"
          fullWidth  
          color='secondary'
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
          color='secondary'
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
          color='secondary'
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
          color='secondary'
          error={errors.cvv && touched.cvv}
          helperText={errors.cvv || ""}
          onChange={(event) => handleChange("cvv")(event)}
        />
      </Grid>

      <Grid style={{paddingTop:"24px", paddingLeft:"24px"}}>
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
    
  );
}