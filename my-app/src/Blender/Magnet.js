import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Magnet1 from '../Images/Blender/Magnet/Magnet.png';
import M1 from '../Images/Blender/Magnet/M1.jpg';
import M2 from '../Images/Blender/Magnet/M2.jpg';
import CarouselComponent from '../components/Carousel';


//images for the carousel
const images =[
  {
   src: Magnet1, alt: 'Magnet cover', legend:''
  },
  {
    src: M1, alt: 'Magnet image1', legend:''
   },
   {
    src: M2, alt: 'Magnet image2', legend:''
   },
];




const defaultTheme = createTheme();

export default function Magnet() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About The Mind the Gap Magnet</h1>
        
          <p>
          The Mind the Gap Magnet is a 3D modeling project I created for the
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
        This project required us to 3D model a magnet from an image of the 'mind the gap' sign 
        of the British metero rail. 
        <br></br>
        The magnet additionally had to be placed on a marble material surface. 
          <br></br>
         
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 20/20, 100%, 5
            <br></br>
            Course Grade: 5
          </p>

   
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
