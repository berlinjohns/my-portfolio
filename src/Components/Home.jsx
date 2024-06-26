import {React} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Smprofile from '../Media/profile.png';
import LgProfile from '../Media/profile-lg.png'
import Hidden from '@mui/material/Hidden';
import ReactGA from "react-ga4";




const useStyles =makeStyles((theme)=>({

  title: {
    
    background: "linear-gradient(to right, #FF5EBA , #008FFF, #25F4E7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
 layer1:{
  height:"100%",
 
},
 btn:{
  marginTop:"0.5em !importent ",
 },
 icons:{
   color:'#008FFF'
 },
Smprofile:{
  width:'10rem',
  borderRadius:'50%',
  border: '4px solid  #008FFF',
  
  
},
profile:{
  width:'20rem' ,
 
  borderRadius:14,
  
  
 
},
profile_warrper:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
 
}

}));
const hireMe = () => {
  window.open('https://www.linkedin.com/in/berlinjohns', '_blank',"noopener noreferrer");
  ReactGA.event({
    category: 'Button Click',
    action: 'Clicked Hire Me Button',
  });
};
export function Home({ darkMode, toggleDarkMode }) {
  const classes=useStyles();
  


  
    return (
        
          <Box
          sx={{
            backgroundColor:darkMode ? '#111':'white',
            height:{
              xs:"100vh",
              sm:"100h",
              md:"100vh",
              lg:"100vh",
            },
          }}
          >
          <Grid container background="background" >
              <Hidden smUp>
                
          <Grid item 
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop:22
          }}
        
          xs={12}>
                
          <img  src={Smprofile} alt="Berlin_Johns_Portfolio" className={classes.Smprofile}/>
                
          </Grid>
              </Hidden>
            
            <Grid item lg={7} md={6} sm={8} 
            className={classes.layer1}
           
            
            sx={{
              marginTop:{
                   xs:2,
                   sm:0,
                   md:14,
                   lg:20,
              },
              marginLeft:{
                xs:4,
                sm:4,
                md:4,
                lg:4,
              },
              lineHeight:{
                xs:'3.2rem',
                sm:'4rem',
                md:'5.5rem',
                lg:'5rem',

              } ,
              
            }}  >
                
                 <Typography component="h1"
                 sx={{

        
                   
                  fontSize:{
                    xs:'1.9rem',
                    sm:'2.5rem',
                    md:'3rem',
                    lg:60,
                  lineHeight:{
                    xs:'.5rem',
                    sm:'2rem',
                    md:'3.5rem',
                    lg:'5rem',

                  } , 
                 
                  },
                  fontWeight:"600",
                  minWidth:"80%",
                  maxHeight:"50",
                 }}
                 className={classes.title}
                 >
                   As a Software  Engineer  and Designer, I craft online assets for your business.
                   
                 </Typography>
                  <Button
                   onClick={hireMe}
                 sx={{
                  backgroundColor:darkMode ? "white" :"#111",
                  color:darkMode ? "#111" :"primary"
                 }}>
                      Hire Me
                  </Button>
                
             </Grid>
             <Hidden smDown>
             <Grid item lg={4} md={3} sm={12}>
             <Box sx={{
               

               paddingTop:{
                md:'9em'
               }
             }} className={classes.profile_warrper}>
                  <img
                  
                  src={LgProfile} className={classes.profile} alt="Profile" />
             </Box>
             </Grid>
             </Hidden>
             
             
           </Grid>  
           </Box>   
          
        
    )
}


