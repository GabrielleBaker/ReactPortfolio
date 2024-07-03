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
          Moodscape is a mobile application I developed for the  
          <a href='https://opinto-opas.haaga-helia.fi/course_unit/SWD4TF020' 
              target="_blank"
              rel="noopener noreferrer"
              > Mobile Programming  </a> 
              course at 
              <a href='https://www.haaga-helia.fi/en' 
              target="_blank"
              rel="noopener noreferrer"
              >  Haaga Helia University of Applied Sciences. </a>
          <br></br>
        
          <br></br>
          Moodscape allows users with mood irregularities such as bipolar disorder to track their moods over time to prevent dangerous episodes.
          <br></br>
          The project involved utilizing React Native, Expo SDK, and Firebase to create a 
          functional mobile application. 
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
          <h4>Sign up/Log in</h4>
          User Authentication: Secure sign up & login functionality via Firebase Authentication.
          <h4>Homepage</h4>
          Viewing summaries of past logs, ordered by date with the newest logs displayed first.
          <h4>New Log Entries</h4>
          Mood Tracking: Users can log their moods on this page.
          <br></br>
          Date picker: Quickly select the date for the log entry via a date picker pop out. Dates extend only to present day and not into the future, past dates can be selected to allow for retroactive entries.
          <br></br>
          Mood slider: For quick selection of moods, mood is displayed by text beneath the slider.
          <br></br>
          Detailed note text form: Allowing for more detailed mood journaling. 
          <br></br>


          Realtime Database: Data from each log is stored in a Firebase Realtime Database.
          
          <br></br>
          Emergency Assistance: A dedicated page with helplines that directly open in the phone's call center for quick access in case of emergency situations.
          A map modal for user location sharing.
          <br></br>
          Viewing Logs by Calendar: A calendar view allows users to track the progression of moods over time at a glance as moods are displayed by colour coding on each calendar day.
         <br></br>
          </p>

        <h3>Technical Implementation:</h3>
          <p>
          React Native: UUID, phone call, maps, date picker, slider, calendar, popup modal, simple toast, navigation, and linking.
          <br></br>
          Expo: Icons, date time picker, slider, location, and status bar.
          <br></br>
          Firebase: Authentication and Realtime Database.
          </p>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
