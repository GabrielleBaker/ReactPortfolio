import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Clockimg from '../Images/Blender/Clock/Clock.png';
import CarouselComponent from '../components/Carousel';
import Clock1 from '../Images/Blender/Clock/Clock1.png';
import Clock2 from '../Images/Blender/Clock/Clock2.png';
import Clock3 from '../Images/Blender/Clock/Clock3.png';

//images for the carousel
const images =[
  {
   src: Clockimg, alt: 'Clock cover image', legend:''
  },
  {
    src: Clock1, alt: 'Clock airplane', legend:''
   },
   {
    src: Clock2, alt: 'Clock airplane2', legend:''
   },
   {
    src: Clock3, alt: 'Clock airplane3', legend:''
   },
  
];




const defaultTheme = createTheme();

export default function Clock() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About The Aiplane Clock</h1>
        
          <p>
          The Airplane Clock is a 3D modeled project I made for the
          <a href='https://opinto-opas.haaga-helia.fi/course_unit/DIG012AS2AE' 
              target="_blank"
              rel="noopener noreferrer"
              > Basic 3D Design with Blender </a> 
              course at 
              <a href='https://www.haaga-helia.fi/en' 
              target="_blank"
              rel="noopener noreferrer"
              >  Haaga Helia University of Applied Sciences. </a>
          <br></br>
          <br></br>
        This project required us to design and 3D model a clock.
        <br></br>
        I decided to model this clock into something fun, an airplane toy which could 
        perhaps be found in a child's room. 
        <br></br>
        The propeller of the airplane is the face of the clock, with the hands of the clock
        acting as the blades of the propeller.
        <br></br>
        The clock is covered with glass, and inside the cockpit is a small clay style pilot.
        The cockpit is also covered with a glass texture. 
          <br></br>
         
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 40/40, 100%, 5
            <br></br>
            Course Grade: 5
          </p>

        </main>
      </Container>
      
    </ThemeProvider>
  );
}
