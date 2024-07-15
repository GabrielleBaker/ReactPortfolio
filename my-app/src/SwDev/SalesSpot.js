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

export default function SalesSpot() {
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
              <br></br>
              
              This project provided a sales portal for a pet supplier.
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
          SalesSpot functions as a portal for pet store suppliers. <br></br>

          <h4>Sign up/Log in</h4>
          User Authentication: Secure login functionality either as a sales person or as
          a manager. 
          <br></br>
          Signout: Logging out redirects to the log in page.
           (user/admin)

          <h4>User Permissions</h4>
          Managers (admin) have different permissions than sales persons (users). 
          <br></br>
          New Users: The manager (admin) has permission to add a new sales person (user) to the system, allowing that new user
          access to the system with the relevent rights and permissions.  

          <h4>Homepage</h4>
          Date widget: Displays date of login.<br></br>
          Task bulletin board: Tasks and their priority levels are added to/edited/deleted 
          from the database.
          
          <h4>Menu</h4>
          A static toolbar menu allows for quick navigation across the program.

          <h4>Orders</h4>
          Order list: Displays a view of current orders as a list with select information.<br></br>
          New Orders: New orders can be placed either from this page or from the menu.<br></br>
          Deleting Orders: Managers (admin) have the additional permission of deleting orders.<br></br>
          Viewing existing orders: A more detailed view is available for each order, displaying further information.
          <br></br>
          Editing Orders: Existing orders can be edited or viewed in more detail by sales persons and managers. <br></br>
          Order information is fetched from the database and can be altered.
          Order ID cannot be altered. A date picker is utilized to change the date.
          Drop down lists are utilized to pick from a list of existing customers and products. 
         
          <h4>Customers</h4>
          Customers contains information of customers that Sales Spot supplies; pet stores or vet clinics. 
          <br></br>
          The Customers page contains a list of all the customers and their information such as 
          contact details, physical and shipping addresses and contact persons.
          <br></br>
          Editing Customers: These can be edited by the sales person but not deleted. 
          <br></br>
          Deleting Customers: The manager once again has the permission to delete customers from the database.
          <br></br>
          Adding New Customers: New customers can be added by both the sales persons and the manager.
          
          <h4>Products</h4>
          Product Catalog: This page offers a list of products with their pricing and description.
          <br></br>
          These products feature by name in a drop down list when creating a new order.
          <br></br>
          New Products/ Deleting/ Editing Products: The sales persons have no permission to alter, 
          delete or add new products to the catalog, this permission is reserved for the manager (admin).
          
          </p>

        <h3>Technical Implementation:</h3>
          <p>
          This project used Java, Maven, Springboot, Spring Security, JDBC, MySQL, H2 databases (testing), 
          and was deployed on Softala.
          </p>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}
