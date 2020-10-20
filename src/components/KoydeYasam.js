import React, {Component} from "react";
import '../styles/Images.css';
import Gallery from 'react-grid-gallery';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
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

// const IMAGES =
//    [
//       {
//          src: Image_Y_1,
//          thumbnail: Image_Y_1,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: "Büyük Yenge"
//       },
//       {
//          src: Image_Y_2,
//          thumbnail: Image_Y_2,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_3,
//          thumbnail: Image_Y_3,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_4,
//          thumbnail: Image_Y_4,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_5,
//          thumbnail: Image_Y_5,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_6,
//          thumbnail: Image_Y_6,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_7,
//          thumbnail: Image_Y_7,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_8,
//          thumbnail: Image_Y_8,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_9,
//          thumbnail: Image_Y_9,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_10,
//          thumbnail: Image_Y_10,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_11,
//          thumbnail: Image_Y_11,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_12,
//          thumbnail: Image_Y_12,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_13,
//          thumbnail: Image_Y_13,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_14,
//          thumbnail: Image_Y_14,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_15,
//          thumbnail: Image_Y_15,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_16,
//          thumbnail: Image_Y_16,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_17,
//          thumbnail: Image_Y_17,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_18,
//          thumbnail: Image_Y_18,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_19,
//          thumbnail: Image_Y_19,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//       {
//          src: Image_Y_20,
//          thumbnail: Image_Y_20,
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          caption: ""
//       },
//    ];

const images =
   [
      {
         src: Image_Y_1,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_2,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_3,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_4,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_5,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_6,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_7,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_8,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_9,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_10,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_11,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_12,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_13,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_14,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_15,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_16,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_17,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_18,
         title: '',
         description: ''
      },
      {
         src: Image_Y_19,
         title: 'image title',
         description: 'image description'
      },
      {
         src: Image_Y_20,
         title: 'image title',
         description: 'image description'
      },
   ]


export default class KoydeYasam extends Component {

   render() {
      return (
         <div className="main-images-1" style={{
            display: "block",
            marginTop: "60px",
            minHeight: "1px",
         }}>
            <Lightbox
               images={images}
               thumbnailWidth='320px'
               thumbnailHeight='212px'
               showImageModifiers={false}/>
         </div>
      )
   }
}