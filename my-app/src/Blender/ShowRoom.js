import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Showroom from '../Images/Blender/Cutlery/Showroom.png';
import CarouselComponent from '../components/Carousel';
import cutleryset1 from '../Images/Blender/Cutlery/cutleryset1.png';
import cutleryset2 from '../Images/Blender/Cutlery/cutleryset2.png';
import table1 from '../Images/Blender/Cutlery/table1.png';
import table2 from '../Images/Blender/Cutlery/table2.png';

//images for the carousel
const images =[
  {
   src: Showroom, alt: 'Showroom cover', legend:''
  },
  {
    src: table1, alt: 'Table 1', legend:''
   },
   {
    src: table2, alt: 'Table 2', legend:''
   },
  {
    src: cutleryset1, alt: 'Cutlery set 1', legend:''
   },
   {
    src: cutleryset2, alt: 'Cutlery set 2', legend:''
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
        <h1>About The Ikea Showroom</h1>
        
          <p>
          The Ikea Showroom is a 3D modeling project I completed for the 
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
        The project required a 3D modeled cutlery set which I elaborated upon to turn
        into an Ikea Showroom with a dining table, plates with meatballs and multiple cutlery sets.
        I tried to make some cutlery sets with blue plastic handles, and others that are simply metal.
        <br></br>
        The meatballs are plated and have sauce and a leaf for garnish. 
       <br></br>
        The table is textured with wood and I rendered both with cycles and eevee.
        This was my first attempt at UV unwrapping and the wood texture was not perfect.
        
          <br></br>
         
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 28/30, 93.3%
            <br></br>
            Course Grade: 5
          </p>

   
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
