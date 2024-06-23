import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Featuredsw from './Images/Softwaredev/Featuredsw.png';
import MSAPP from './Images/Softwaredev/Moodscape/MSAPP.png';
import Splash from './Images/Softwaredev/Moodscape/Splash.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const defaultTheme = createTheme();

export default function Moodscape() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
  
      <Container maxWidth="lg">
    
        <main>
        <Card sx={{ position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
           }}>
          <CardMedia
            component="img"
            sx={{  width:'100%' , display: {  sm: 'block' } }}
            image={MSAPP}
          
            
          />

        </Card>
   
    
        <h2>Video Demo and code walkthrough: </h2>
        <iframe width="640" height="390" 
        src="https://www.youtube.com/embed/sNKVWTlsRRg?si=6zXSdBkMyWmfzX36" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>

           <h3>About:</h3>
        <p>
        Moodscape is a project I did for my mobile programming course at Haaga Helia.
        The mobile programming course consisted of utilizing React Native, Expo SDK and live databases.
        Our task was to create a mobile application using React Native and any libraries we found useful.
        Moodscape functions as a mobile application for individuals suffering from mood disturbances, such as bipolar.
        The purpose of the app is to allow for users to track their moods over time, to prevent any dangerous episodes. This app utilizes Firebase realtime database and firebase authentication to allow users to log in and record their mood logs.
        This app also contained a page for emergencies, with helplines that open in the mobile device call center and a map modal that allows for user location sharing.
        Grade received for this project:4.5
        Course grade: 5
        A list of technologies used for this project: React Native: React Native UUID, React native phone call, React Native Maps, React Native Community Date Picker, React Native Community slider, React Native Calendar, React Native Popup Modal, React Native Simple Toast, React Navigation, React Native Linking
        Expo: Expo icons, Expo Date Time Picker, Expo slider, Expo Location, Expo Status Bar
        Firebase: Firebase Auth, Firebase Realtime Database
        </p>
  

        <Carousel //still a mess https://www.npmjs.com/package/react-responsive-carousel
        //need to figure out sizing and turn it into its own component to reuse on each project
         >
                <div>
                    <img src={Splash } height= '500x' width='300px' position='center'
                 />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={Splash}   height= '500x' width='300px' position='center'  />
                    <p className="legend">Legend 2</p>

                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
         
         
        </main>
      </Container>
      
   
     
    </ThemeProvider>
  );
}
