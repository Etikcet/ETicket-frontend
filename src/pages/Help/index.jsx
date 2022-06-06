import HomePageNavigationBar from "../../components/HomePageNavigationBar";
import Footer from "../../components/Footer";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';


export default function Help(){
    return (
        <dev>
            <HomePageNavigationBar />
            <h1 style={{textAlign:'center'}}>CONTACT US</h1>
 
            
 
        <Stack direction={'row'} spacing={4}>
        <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <dev style={{color:'white',textAlign:'center',padding:20}}>
            <h1>Email us</h1>
            <br></br>
            <p>help@Eticket.com</p>
        </dev>
        
    </Box>

    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <dev style={{color:'white',textAlign:'center',padding:20}}>
            <h1>call us</h1><br></br>
            <p>011 1234567</p>
        </dev>
        
    </Box>
        </Stack>

       

            <Footer />
        </dev>
    );
}