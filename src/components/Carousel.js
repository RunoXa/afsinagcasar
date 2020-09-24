import React from "react";
import '../styles/Carousel.css'
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer} from
       "mdbreact";
import HomeImage1 from '../images/home-image1.jpg'
import HomeImage2 from '../images/home-image2.jpg'
import HomeImage3 from '../images/home-image3.jpg'

const Carousel = () => {
    return (
       <MDBContainer>
           <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1">
               <MDBCarouselInner>
                   <MDBCarouselItem itemId="1">
                       <MDBView>
                           <img
                              className="d-block w-100"
                              src={HomeImage1}
                              alt="First slide"
                           />
                       </MDBView>
                   </MDBCarouselItem>
                   <MDBCarouselItem itemId="2">
                       <MDBView>
                           <img
                              className="d-block w-100"
                              src={HomeImage2}
                              alt="Second slide"
                           />
                       </MDBView>
                   </MDBCarouselItem>
                   <MDBCarouselItem itemId="3">
                       <MDBView>
                           <img
                              className="d-block w-100"
                              src={HomeImage3}
                              alt="Third slide"
                           />
                       </MDBView>
                   </MDBCarouselItem>
               </MDBCarouselInner>
           </MDBCarousel>
       </MDBContainer>
    );
};
export default Carousel;