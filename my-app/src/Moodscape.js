import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MSAPP from './Images/Softwaredev/Moodscape/MSAPP.png';
import Splash from './Images/Softwaredev/Moodscape/Splash.jpg';
import CarouselComponent from './Carousel';
import signup from './Images/Softwaredev/Moodscape/signup.jpg';
import login from './Images/Softwaredev/Moodscape/login.jpg';
import newlogform from './Images/Softwaredev/Moodscape/newlogform.jpg';
import home from './Images/Softwaredev/Moodscape/home.jpg';
import datepick from './Images/Softwaredev/Moodscape/datepick.jpg';
import calendar from './Images/Softwaredev/Moodscape/calendar.jpg';
import modalcalendar from './Images/Softwaredev/Moodscape/modalcalendar.jpg';
import helplines from './Images/Softwaredev/Moodscape/helplines.jpg';
import mapmodal from './Images/Softwaredev/Moodscape/mapmodal.jpg';
import YTComponent from './YTVideo';
import GHButton from './GithubButton';


//images for the carousel
const images =[
  {
   src: MSAPP, alt: 'MSAPP Image', legend:''
  },
  {
    src: Splash, alt: 'Splash Image', legend:'Splash'
  },
  {
    src: signup, alt: 'Signup Image', legend:'Sign up'
  },
  {
    src: login, alt: 'Login Image', legend:'Sign in'
  },
  {
    src: newlogform, alt: 'New Log Image', legend:'New Log'
  },
  {
    src: datepick, alt: 'Date Picker Image', legend:'Date Picker'
  },
  {
    src: home, alt: 'Home Image', legend:'Home page- Log entries'
  },
  {
    src: calendar, alt: 'Calendar Image', legend:'Calendar Page'
  },
  {
    src: modalcalendar, alt: 'Calendar Modal Image', legend:'Calendar Info Modal'
  },
  {
    src: helplines, alt: 'Helplines Image', legend:'Emergency Helplines'
  },
  {
    src: mapmodal, alt: 'Helpline Map Modal Image', legend:'Emergency location sharing map'
  },
];

//link for YT video
const link =[
  "https://www.youtube.com/embed/sNKVWTlsRRg?si=6zXSdBkMyWmfzX36"
]



const defaultTheme = createTheme();

export default function Moodscape() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About Moodscape</h1>
        <GHButton link='https://github.com/GabrielleBaker/Moodscape/tree/master'/>
          <p>
          Moodscape is a mobile application I developed for my mobile programming course at Haaga Helia. 
          <br></br>
          Moodscape allows users to track their moods over time to prevent dangerous episodes.
          <br></br>
          The project involved leveraging React Native, Expo SDK, and Firebase to create a 
          functional app for individuals with mood disturbances like bipolar disorder. 
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 4.5
            <br></br>
            Course Grade: 5
          </p>

        <h2>Video Demo and Code Walkthrough: </h2>
        <YTComponent link={link}/>

        <h3>Features:</h3>
          <p>
          Mood Tracking: Users can log their moods, utilizing a date picker, a mood slider and note form. 
          Realtime Database: Data from each log is stored in a Firebase Realtime Database.
          User Authentication: Secure sign up & login functionality via Firebase Authentication.
          Emergency Assistance: A dedicated page with helplines that directly open in the phone's call center and a map modal for location sharing.
          Viewing Logs by Calendar: A calendar view allows users to track the progression of moods over time at a glance.
          </p>

        <h3>Technical Implementation:</h3>
          <p>
          React Native: UUID, phone call, maps, date picker, slider, calendar, popup modal, simple toast, navigation, and linking.
          Expo: Icons, date time picker, slider, location, and status bar.
          Firebase: Authentication and Realtime Database.
          </p>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
