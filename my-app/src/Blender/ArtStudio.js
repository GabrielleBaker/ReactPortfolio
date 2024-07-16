import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from '../components/Carousel';
import ArtStudio1 from '../Images/Blender/Room/ArtStudio.png';
import Room2 from '../Images/Blender/Room/Room2.png';
import Room5 from '../Images/Blender/Room/Room5.png';
import ChairGlass from '../Images/Blender/Room/ChairGlass.png';
import TableTopDown from '../Images/Blender/Room/TableTopDown.png';
import Catbed from '../Images/Blender/Room/Catbed.png';
import Roomwhole from '../Images/Blender/Room/Roomwhole.png';
import Easel1 from '../Images/Blender/Room/Easel1.png';
import TableTop3 from '../Images/Blender/Room/TableTop3.png';
import TableTop from '../Images/Blender/Room/Tabletop.png';
import Chair from '../Images/Blender/Room/Chair.png';
import Tside from '../Images/Blender/Room/TSide.png';
import Lamp from '../Images/Blender/Room/Lamp1.png';
import LampBulb from '../Images/Blender/Room/LampBulb.png';


//images for the carousel
const images =[
  {
   src: ArtStudio1, alt: 'Cover', legend:''
  },
  
   {
    src: Roomwhole, alt: 'Glass Chair', legend:''
   },
   {
    src: ChairGlass, alt: 'Full Room', legend:''
   },
   {
    src: Chair, alt: 'Full Room', legend:''
   },
   {
    src: Tside, alt: 'Full Room', legend:''
   },
   {
    src: TableTop3, alt: 'Full Room', legend:''
   },
   {
    src: TableTop, alt: 'Full Room', legend:''
   },
   {
    src: TableTopDown, alt: 'Full Room', legend:''
   },
   {
    src: Easel1, alt: 'Full Room', legend:''
   },
   {
    src: Catbed, alt: 'Full Room', legend:''
   },
   {
    src: Room2, alt: 'Full Room', legend:''
   },
   {
    src: Lamp, alt: 'Full Room', legend:''
   },
   {
    src: LampBulb, alt: 'Full Room', legend:''
   },
   {
    src: Room5, alt: 'Full Room', legend:''
   },
];




const defaultTheme = createTheme();

export default function ArtStudio() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About The Art Studio</h1>
        
          <p>
          The Art Studio is my final 3D modeling project for the
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
        The project required a 3D modeled room containing 8 - 12 items, including a table, a couple of 
        chairs, smaller objects including a lamp and decorative items. Walls treated 
        with wallpaper and floors with a material/texture.
          <br></br>
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 54/60, 90%
            <br></br>
            Course Grade: 5
          </p>

          <h2>My Project</h2>

        <p>
        I created an artist's studio for this project. 
         <br></br>The artist has a pet cat, which provides the 
         inspiration for the paintings. There is a cat bed, food and water bowls which have been 
         filled. 
         <br></br>There is an artist easel and several canvases containing paintings of the cat.
         There is a wood chair with a fabric cushion, and a glass bubble chair that hangs from the ceiling by a chain.
         <br></br>
         The table is intended to represent a refurbished surfboard, while the 
         coffee table represents a refurbished wine barrel, highlighting the
         creativity of artists. A lamp with a globe which emits light sits on the coffee barrel, 
         along with a full cup of coffee.
         <br></br>
         Dinner consisting of meatballs sits on the surfboard table along with a second cup of coffee.
         Both coffee cups rest on coasters which contain a UV unwrapped image.
         <br></br>
         The seats for the surfboard table are two material cushions on the wood floor which has
         been UV unwrapped for a wood texture. There is additionally a glass ashtray and a cigarette on the table.
          </p>
   
      
      
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
