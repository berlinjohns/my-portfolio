import {React} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Smprofile from '../Media/Smportfoliodp.jpeg';
import Hidden from '@mui/material/Hidden';




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
  border: '2px solid   #008FFF',
  borderRadius:14,
   boxShadow: '0px 1px 0px  #008FFF',
  
 
},
profile_warrper:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
 
}

}));
const handleButtonClick = () => {
  window.open('https://www.linkedin.com/in/berlinjohns', '_blank',"noopener noreferrer");
};
export function Home() {
  const classes=useStyles();
  


  
    return (
        
          <Box
          sx={{
            backgroundColor:"#111",
            height:{
              xs:"100vh",
              sm:"100h",
              md:"100vh",
              lg:"100vh",
            },
          }}
          >
          <Grid container background="default" >
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
                   As a web designer and developer, I craft online assets for your business.
                   
                 </Typography>
                  <Button
                   onClick={handleButtonClick}
                 sx={{
                  backgroundColor:"white",
                  color:"#008FFF"
                 }}>
                      Hire Me
                  </Button>
                
             </Grid>
             <Hidden smDown>
             <Grid item lg={4} md={3} sm={12}>
             <Box sx={{
              
               paddingTop:{
                md:'6em'
               }
             }} className={classes.profile_warrper}>
                  <img
                  
                  src="https://ucarecdn.com/f201e8ad-dbbb-4748-992f-ac2cba28d9cf/WhatsAppImage20240118at105157AM.jpeg" className={classes.profile} alt="Profile" />
             </Box>
             </Grid>
             </Hidden>
             
             
           </Grid>  
           </Box>   
          
        
    )
}


