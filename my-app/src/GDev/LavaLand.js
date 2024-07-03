import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from '../components/Carousel';
import YTComponent from '../components/YTVideo';
import Spot from '../Images/Softwaredev/Salesspot/Spot.png';
import sscal from '../Images/Softwaredev/Salesspot/sscal.png';
import sscust from '../Images/Softwaredev/Salesspot/sscust.png';
import sshome from '../Images/Softwaredev/Salesspot/sshome.png';
import sslogin from '../Images/Softwaredev/Salesspot/sslogin.png';
import sseditorder from '../Images/Softwaredev/Salesspot/sseditorder.png';
import tasks from '../Images/Softwaredev/Salesspot/tasks.png';
import newproduct from '../Images/Softwaredev/Salesspot/newproduct.png';
import newsalesperson from '../Images/Softwaredev/Salesspot/newsalesperson.png';
import ordersummary from '../Images/Softwaredev/Salesspot/ordersummary.png';
import admincatalog from '../Images/Softwaredev/Salesspot/admincatalog.png';
import admincust from '../Images/Softwaredev/Salesspot/admincust.png';
import catalog from '../Images/Softwaredev/Salesspot/catalog.png';
import editcust from '../Images/Softwaredev/Salesspot/editcust.png';
import newcust from '../Images/Softwaredev/Salesspot/newcust.png';
import ssolist from '../Images/Softwaredev/Salesspot/ssolist.png';
import ssorders from '../Images/Softwaredev/Salesspot/ssorders.png';
import GHButton from '../components/GithubButton';

//images for the carousel
const images =[
  {
   src: Spot, alt: 'MSAPP Image', legend:''
  },
  {
    src: sslogin, alt: 'Login Image', legend:'Login'
  },
  {
    src: sshome, alt: 'Home Image', legend:'Home'
  },
  {
    src: tasks, alt: 'Tasks Image', legend:'Add New Task'
  },
  {
    src: ssorders, alt: 'Orders Image', legend:'Admin Orders Page'
  },
  {
    src: ssolist, alt: 'New Log Image', legend:'User Orders Page'
  },
  {
    src: ordersummary, alt: 'Calendar Image', legend:'Order Summary'
  },
  {
    src: sseditorder, alt: 'Calendar Image', legend:'Edit Order'
  },
  {
    src: sscal, alt: 'Date Picker Image', legend:'New Order'
  },
  {
    src: admincust, alt: 'Calendar Image', legend:'Admin Customer Page'
  },
  {
    src: sscust, alt: 'Calendar Image', legend:'User Customer Page'
  },
  {
    src: editcust, alt: 'Calendar Image', legend:'Edit Customer'
  },
  {
    src: newcust, alt: 'Calendar Image', legend:'New Customer'
  },
  {
    src: catalog, alt: 'Calendar Image', legend:'User Product Catalog Page'
  },
  {
    src: admincatalog, alt: 'Calendar Image', legend:'Admin Product Catalog Page'
  },
  {
    src: newproduct, alt: 'Calendar Image', legend:'Admin New Product'
  },
  {
    src: newsalesperson, alt: 'Calendar Image', legend:'Admin New Sales Person'
  },
];

//link for YT video
const link =[
  "https://www.youtube.com/embed/zvFiRZzyBB4?si=VgjUAY_Zyaj1apU7"
]

const defaultTheme = createTheme();

export default function Lavaland() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About Sales Spot</h1>
        <GHButton link="https://github.com/GabrielleBaker/SalesSpot"></GHButton>
     
          <p>
          SalesSpot is a program I developed for the  
          <a href='https://opinto-opas.haaga-helia.fi/course_unit/SWD4TF021' 
              target="_blank"
              rel="noopener noreferrer"
              > Server Programming  </a> 
              course at 
              <a href='https://www.haaga-helia.fi/en' 
              target="_blank"
              rel="noopener noreferrer"
              >  Haaga Helia University of Applied Sciences. </a>
          </p>

        <h2>Project & Course Grading</h2>
          <p>
            Project Grade: 5
            <br></br>
            Course Grade: 5
          </p>

        <h2>Video Demo and Code Walkthrough: </h2>
        <YTComponent link={link}/>

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
