import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeNavigationBar from '../../components/HomeNavigationBar';
import BusRoute from '../../components/BusRoute';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const theme = createTheme();

export default function BusRoutes() {
  return (


    <ThemeProvider theme={theme}>

      <CssBaseline />
    
      <Toolbar>
          <Logo/>
        </Toolbar>
      <main>
          <HomeNavigationBar/>
        
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 3,
          }}
        >
          
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" style= {{ maxWidth: '1300px'}}>
          {/* End hero unit */}
          <Grid container spacing={4} 
                 >
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>

                <BusRoute/>
                  
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
      <Box>
        
        <Footer/>
      </Box>
      
    </ThemeProvider>
  );
}
