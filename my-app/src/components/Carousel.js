import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import PropTypes from 'prop-types';


export default function CarouselComponent({images}) {

    return (
    <Carousel
        //https://www.npmjs.com/package/react-responsive-carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={true}
        autoPlay={true}
        stopOnHover={true}
        interval={5000}
        transitionTime={500}
    >
              {images.map((image,index)=>
            <div key={index}>
                <img 
                    src={image.src} 
                    alt={image.alt}
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '500px', 
                        objectFit: 'contain' //cover will crop the image
                      }}
                    />
        {//  <p className="legend">{image.legend}</p>
        }      
            </div>)}
            </Carousel>

    )}
    CarouselComponent.propTypes = {
        images: PropTypes.arrayOf(
          PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
         //   legend: PropTypes.string,
          })
        ).isRequired,
      };
    