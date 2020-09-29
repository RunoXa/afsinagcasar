import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';
import '../styles/Images.css';
import Bahar1 from '../images/bahar/bahar1.JPG';
import Bahar2 from '../images/bahar/bahar2.JPG';
import Bahar3 from '../images/bahar/bahar3.JPG';
import Bahar4 from '../images/bahar/bahar4.JPG';
import Bahar5 from '../images/bahar/bahar5.JPG';
import Bahar6 from '../images/bahar/bahar6.JPG';
import Bahar7 from '../images/bahar/bahar7.JPG';
import Bahar8 from '../images/bahar/bahar8.JPG';
import Bahar9 from '../images/bahar/bahar9.JPG';
import Bahar10 from '../images/bahar/bahar10.JPG';
import Bahar11 from '../images/bahar/bahar11.JPG';
import Bahar12 from '../images/bahar/bahar12.JPG';
import Bahar13 from '../images/bahar/bahar13.JPG';
import Bahar14 from '../images/bahar/bahar14.JPG';
import Bahar15 from '../images/bahar/bahar15.JPG';
import Bahar16 from '../images/bahar/bahar16.JPG';
import Bahar17 from '../images/bahar/bahar17.JPG';
import Bahar18 from '../images/bahar/bahar18.JPG';
import Bahar19 from '../images/bahar/bahar19.JPG';
import Bahar20 from '../images/bahar/bahar20.JPG';
import Bahar21 from '../images/bahar/bahar21.JPG';
import Bahar22 from '../images/bahar/bahar22.JPG';
import Bahar23 from '../images/bahar/bahar23.JPG';
import Bahar24 from '../images/bahar/bahar24.JPG';
import Bahar25 from '../images/bahar/bahar25.JPG';
import Bahar26 from '../images/bahar/bahar26.JPG';
import Bahar27 from '../images/bahar/bahar27.JPG';
import Bahar28 from '../images/bahar/bahar28.JPG';
import Bahar29 from '../images/bahar/bahar29.JPG';
import Bahar30 from '../images/bahar/bahar30.JPG';


export default class Bahar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         images: this.props.images
      };
   }

   render() {
      var images =
         this.state.images.map((i) => {
            i.customOverlay = (
               <div style={captionStyle}>

               </div>);
            return i;
         });


      return (
         <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            overflow: "auto"
         }}>
            <Gallery
               images={images}
               enableImageSelection={false}/>
         </div>
      );
   }
}

Bahar.propTypes = {
   images: PropTypes.arrayOf(
      PropTypes.shape({
         src: PropTypes.string.isRequired,
         thumbnail: PropTypes.string.isRequired,
         srcset: PropTypes.array,
         caption: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
         ]),
         thumbnailWidth: PropTypes.number.isRequired,
         thumbnailHeight: PropTypes.number.isRequired
      })
   ).isRequired
};

const captionStyle = {
   border: "90px solid rgba(46, 49, 49, 0.2)",
}

Bahar.defaultProps = {
   images:
      ([
         {
            src: Bahar1,
            thumbnail: Bahar1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Büyük Yenge - Köy"
         },
         {
            src: Bahar2,
            thumbnail: Bahar2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar3,
            thumbnail: Bahar3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar4,
            thumbnail: Bahar4,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar5,
            thumbnail: Bahar5,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar6,
            thumbnail: Bahar6,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar7,
            thumbnail: Bahar7,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar8,
            thumbnail: Bahar8,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar9,
            thumbnail: Bahar9,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar10,
            thumbnail: Bahar10,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar11,
            thumbnail: Bahar11,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar12,
            thumbnail: Bahar12,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar13,
            thumbnail: Bahar13,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar14,
            thumbnail: Bahar14,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar15,
            thumbnail: Bahar15,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar16,
            thumbnail: Bahar16,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar17,
            thumbnail: Bahar17,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar18,
            thumbnail: Bahar18,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar19,
            thumbnail: Bahar19,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar20,
            thumbnail: Bahar20,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar21,
            thumbnail: Bahar21,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar22,
            thumbnail: Bahar22,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar23,
            thumbnail: Bahar23,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar24,
            thumbnail: Bahar24,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar25,
            thumbnail: Bahar25,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar26,
            thumbnail: Bahar26,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar27,
            thumbnail: Bahar27,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar28,
            thumbnail: Bahar28,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar29,
            thumbnail: Bahar29,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Bahar30,
            thumbnail: Bahar30,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
      ])
};