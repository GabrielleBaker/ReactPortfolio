import * as React from 'react';
import MSAPP from './Images/Softwaredev/Moodscape/MSAPP.png';
import Splash from './Images/Softwaredev/Moodscape/Splash.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Carousels() {
    return (

<Carousel sx={{width:'50%'}}>
                <div>
                    <img src={Splash}
                 />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={Splash}   height= '500px'  />
                    <p className="legend">Legend 2</p>

                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

    )}