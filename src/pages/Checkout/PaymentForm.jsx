import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
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
          />
          
        </Grid>

        <Grid item xs={12} md={6}>
        <TextField
            required
            id="outlined-required"
            label="Card Number"
            fullWidth  
        />
        </Grid>

        <Grid item xs={12} md={6}>
           <TextField
            required
            id="outlined-required"
            label="Exp Date"
            fullWidth  
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="outlined-required"
            label="CVV"
            fullWidth  
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}