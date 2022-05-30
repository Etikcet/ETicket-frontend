import React  from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { CardActionArea, styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function BusRoute(props){

  return(
            <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  style={{width:'300px', borderStyle:'solid', borderColor:'#A97ED5'}}
                >
                <Link href='/checkout' 
                 style={{textDecoration:'none', color:'#333C83'}}>

                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      //pt: '56.25%',
                    }}
                    style = {{ height: '50%', paddingTop: '20%'}}
                    image={require("./bus.jpg")}
                    alt={'bus'}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Lato'}}>
                      Start-Finish{}
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Lato'}}>
                      price{}
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Lato'}}>
                      departure time{}
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Lato'}}>
                      arrival time{}
                    </Typography>
                  </CardContent>
                  
                  </CardActionArea>
                  </Link>
        </Card>
  )

                }