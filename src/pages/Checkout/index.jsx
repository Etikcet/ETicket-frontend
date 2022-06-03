import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Logo from '../../components/Logo';
import { style, width } from '@mui/system';
import { Circle } from '@mui/icons-material';
import { Card, CardContent, CardMedia } from '@mui/material';
import DirectionsBusFilledSharpIcon from '@mui/icons-material/DirectionsBusFilledSharp';



const steps = ['Booking details', 'Payment details', 'Review your booking'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Logo/>
        </Toolbar>
      </AppBar>
      <Container style={{ float:"left", width:"50%"}}>
        
          <CardMedia 
          component="img"
          style={{ height: "300px" }}
          image={require("./busstop.png")}
          alt={"bus"}
          />
          <CardContent>
            <div style={{textAlign:"center"}}> <h3 style={{display:"inline-block"}}>Bus No</h3></div>
            <div style={{textAlign:"center"}}> <h3 style={{display:"inline-block"}}>Departure Time</h3></div>
            <div style={{textAlign:"center"}}> <h3 style={{display:"inline-block"}}>Arrival Time</h3></div>
            <div style={{textAlign:"center"}}> <h3 style={{display:"inline-block"}}>Price</h3></div>
            <div style={{textAlign:"center"}}> <h3 style={{display:"inline-block"}}>Contact No</h3></div>

          </CardContent>
        

      </Container>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }} style={{ float:"right", marginRight:"100px"}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          style={{borderColor:"#9C27B0"}}>
          
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }} >
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Booking confirmed.
                </Typography>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}