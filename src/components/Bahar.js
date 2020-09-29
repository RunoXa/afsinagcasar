import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';
import Image_Y_1 from '../images/koydeyasam/y_1.jpg';
import Image_Y_2 from '../images/koydeyasam/y_2.jpg';
import Image_Y_3 from '../images/koydeyasam/y_3.jpg';
import Image_Y_4 from '../images/koydeyasam/y_4.jpg';
import Image_Y_5 from '../images/koydeyasam/y_5.jpg';
import Image_Y_6 from '../images/koydeyasam/y_6.jpg';
import Image_Y_7 from '../images/koydeyasam/y_7.jpg';
import Image_Y_8 from '../images/koydeyasam/y_8.jpg';
import Image_Y_9 from '../images/koydeyasam/y_9.jpg';
import Image_Y_10 from '../images/koydeyasam/y_10.jpg';
import Image_Y_11 from '../images/koydeyasam/y_11.jpg';
import Image_Y_12 from '../images/koydeyasam/y_12.jpg';
import Image_Y_13 from '../images/koydeyasam/y_13.jpg';
import Image_Y_14 from '../images/koydeyasam/y_14.jpg';
import Image_Y_15 from '../images/koydeyasam/y_15.jpg';
import Image_Y_16 from '../images/koydeyasam/y_16.jpg';
import Image_Y_17 from '../images/koydeyasam/y_17.jpg';
import Image_Y_18 from '../images/koydeyasam/y_18.jpg';
import Image_Y_19 from '../images/koydeyasam/y_19.jpg';
import Image_Y_20 from '../images/koydeyasam/y_20.jpg';


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
            src: Image_Y_1,
            thumbnail: Image_Y_1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Büyük Yenge - Köy"
         },
         {
            src: Image_Y_2,
            thumbnail: Image_Y_2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_3,
            thumbnail: Image_Y_3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_4,
            thumbnail: Image_Y_4,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_5,
            thumbnail: Image_Y_5,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_6,
            thumbnail: Image_Y_6,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_7,
            thumbnail: Image_Y_7,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_8,
            thumbnail: Image_Y_8,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_9,
            thumbnail: Image_Y_9,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_10,
            thumbnail: Image_Y_10,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_11,
            thumbnail: Image_Y_11,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_12,
            thumbnail: Image_Y_12,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_13,
            thumbnail: Image_Y_13,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_14,
            thumbnail: Image_Y_14,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_15,
            thumbnail: Image_Y_15,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_16,
            thumbnail: Image_Y_16,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_17,
            thumbnail: Image_Y_17,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_18,
            thumbnail: Image_Y_18,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_19,
            thumbnail: Image_Y_19,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
         {
            src: Image_Y_20,
            thumbnail: Image_Y_20,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
         },
      ])
};