import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from './Carousel';
import YTComponent from './YTVideo';
import trainerhome from './Images/Softwaredev/Trainer/trainerhome.png';
import calendar from './Images/Softwaredev/Trainer/calendar.png';
import graphs from './Images/Softwaredev/Trainer/graphs.png';
import newcustomer from './Images/Softwaredev/Trainer/newcustomer.png';
import newtraining from './Images/Softwaredev/Trainer/newtraining.png';
import tr from './Images/Softwaredev/Trainer/tr.png';
import trainerft from './Images/Softwaredev/Trainer/trainerft.png';
import traininglog from './Images/Softwaredev/Trainer/traininglog.png'
import customers from './Images/Softwaredev/Trainer/customers.png';
import GHButton from './GithubButton';

//images for the carousel
const images =[
  {
   src: trainerft, alt: 'Trainer feature Image', legend:''
  },
  {
    src: trainerhome, alt: 'Trainer home Image', legend:'Trainer Home page'
  },
  {
    src: tr, alt: 'Drawer menu', legend:'Drawer Menu'
  },
  {
    src: calendar, alt: 'Calendar', legend:'Calendar'
  },
  {
    src: customers, alt: 'Customer List Image', legend:'Customer List'
  },
  {
    src: newcustomer, alt: 'New Customer Image', legend:'New Customer'
  },
  {
    src: traininglog, alt: 'Training List Image', legend:'Training List'
  },
  {
    src: newtraining, alt: 'New Training Image', legend:'New Training'
  },
  {
    src: graphs, alt: 'Graph Image', legend:'Graphical Representation'
  },
  
];

//link for YT video
const link =[
  "https://www.youtube.com/embed/CqhGaV0Pvhw?si=9_4d4VWboC7Wcb5j" 
]



const defaultTheme = createTheme();

export default function Trainer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About Personal Trainer</h1>
        <GHButton link='https://github.com/GabrielleBaker/Personal-Trainer/tree/main'/>
          <p>
          As the final deliverable for my
          <a href='https://opinto-opas.haaga-helia.fi/course_unit/SWD4TF022' 
              target="_blank"
              rel="noopener noreferrer"
              > Front-End Development  </a> 
              course at 
              <a href='https://www.haaga-helia.fi/en' 
              target="_blank"
              rel="noopener noreferrer"
              >  Haaga Helia University of Applied Sciences. </a>
          <br></br>
          I developed a comprehensive Personal Trainer web app using React.js,
           which is deployed on GitHub Pages. 
           <br>
           </br>
           The application is designed to assist personal trainers in managing their 
           clients and training schedules effectively. 
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
          <h4>Homepage</h4>
                Daily Quote Generator: Fetches an inspirational quote each time the page is refreshed.
                <br></br>
                Weather and Temperature Updates: Displays current weather conditions and temperature.
                <br></br>
                Current Time and Date: Shows the current time and date.
                <br></br>
            <h4>Navigation</h4>
                Navigation within the app is facilitated through intuitive image widgets from the home page
                and a responsive hamburger menu, ensuring easy access to all features and pages.
                Navigation is achieved using React Router.

            <h4>Data Management</h4>
                The app integrates with an API to fetch and manage data, enabling:
                <br></br>
                Customer and Training Lists: Displays detailed lists of customers and their respective training schedules.
                <br></br>
                Export to CSV File: Customer information can be exported to a csv file.
                <br></br>
                Add New Customers and Trainings: Allows users to add new customers and create new training sessions pushing data.
                <br></br>
                Training Activities Graph: Visualize training activities through a graphical representation, providing insights into user preferences.
                <br></br>
                Calendar Integration
                The app includes a calendar feature implemented with FullCalendar, offering:
                <br></br>
                Event Display: Shows training sessions on a calendar, making it easy to manage schedules.
                <br></br>
                Interactive Features: Allows users to interact with the calendar to view and modify events.
               
                <br></br>                
                <h4>API Integration</h4>
                While the original API used for data fetching and management has been removed, the app was designed to:
                <br></br>
                Fetch Data: Retrieve training and customer data from a remote server.
                <br></br>
                Push Data: Send new and updated data to the server, ensuring real-time updates and synchronization.
                <h4>Deployment</h4>
                The application is deployed on GitHub Pages, ensuring accessibility and ease of updates.
          
          </p>

        <h3>Technical Implementation:</h3>
          <p>
            React: Used for building the user interface and managing state.
            <br></br>
            FullCalendar: Integrated for calendar functionality, supporting various views (day, week, month) and interactive features.
            <br></br>
            React Router: Internal navigation handling.
            <br></br>
            AG Grid Integration: data grid functionality, sorting, filtering, and pagination.
            <br></br>
            Material-UI: Utilized for responsive and aesthetic design components.
            <br></br>
            API Integration: Handled data fetching and pushing to a backend server (API no longer available).
            <br></br>
            GitHub Pages: Used for deploying the application, providing a live demo for users.
          </p>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
