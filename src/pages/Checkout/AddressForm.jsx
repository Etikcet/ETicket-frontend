import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Input } from '@mui/material';


export default function AddressForm() {
  return (
    
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Booking Details
      </Typography>

        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
        </Grid>

        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Contact No"
          defaultValue=""
        />
        </Grid>

        <Grid item xs={12}>
          <TextField
          required
          id="outlined-required"
          label="Email"
          fullWidth
          defaultValue=""
        />
        </Grid >
 
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-number"
          label="Number of Seats"
          type="number"
          min={1} 
          max={30}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
       
        
      </Grid>
    </React.Fragment>
  );
}