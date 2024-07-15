import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MSAPP from '../Images/Softwaredev/Moodscape/MSAPP.png';
import CarouselComponent from '../components/Carousel';
import GHButton from '../components/GithubButton';

//images for the carousel
const images =[
  {
   src: MSAPP, alt: 'MSAPP Image', legend:''
  },
  
];




const defaultTheme = createTheme();

export default function ShowRoom() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About The Art Studio</h1>
        
          <p>
          The Art Studio is a mobile application I developed for the  
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
         
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 4.5
            <br></br>
            Course Grade: 5
          </p>

   
      
        <h3>Features:</h3>
          <p>
       
          </p>

        <h3>Technical Implementation:</h3>
          <p>
       
          </p>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
