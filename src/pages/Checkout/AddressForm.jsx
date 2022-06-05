import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Formik } from "formik";
import * as Yup from "yup";
import Button from '@mui/material/Button';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegExp = 
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;


  const validationSchema = Yup.object().shape({
    Firstname: Yup.string().required().label("First Name"),
    Lastname: Yup.string().required().label("Last Name"),
    Contactno: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .length(10),
    Email: Yup.string()
      .matches(emailRegExp, "Email is not valid"),
    Noofseats: Yup.number().required()
      .typeError('you must specify a number')
      .min(0, 'Min value 0.')
      .max(30, 'Max value 30.')

    
  });

export default function AddressForm() {
  return (
    <div>
    <Typography variant="h6" gutterBottom>
    Booking Details
  </Typography>  
    
       <Formik
         initialValues={{
          Firstname: "",
          Contactno: "",
          Email:"", 
          Noofseats:"" 
        }}

        onSubmit={(values) => {
          // Validation success and needs to call backend
          const data = {
            Firstname: values.Firstname,
            Contactno: values.Contactno,
            Email: values.Email,
            Noofseats: values.Noofseats,
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
      

        <Grid container spacing={3}>
        <Grid item xs={12} >
        
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
        </Grid >
 
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
  </div>
  );  
}