import React, {Component} from "react";
import '../../styles/Images.css';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import Image_Y_1 from '../../images/koydeyasam/y_1.jpg';
import Image_Y_2 from '../../images/koydeyasam/y_2.jpg';
import Image_Y_3 from '../../images/koydeyasam/y_3.jpg';
import Image_Y_4 from '../../images/koydeyasam/y_4.jpg';
import Image_Y_5 from '../../images/koydeyasam/y_5.jpg';
import Image_Y_6 from '../../images/koydeyasam/y_6.jpg';
import Image_Y_7 from '../../images/koydeyasam/y_7.jpg';
import Image_Y_8 from '../../images/koydeyasam/y_8.jpg';
import Image_Y_9 from '../../images/koydeyasam/y_9.jpg';
import Image_Y_10 from '../../images/koydeyasam/y_10.jpg';
import Image_Y_11 from '../../images/koydeyasam/y_11.jpg';
import Image_Y_12 from '../../images/koydeyasam/y_12.jpg';
import Image_Y_13 from '../../images/koydeyasam/y_13.jpg';
import Image_Y_14 from '../../images/koydeyasam/y_14.jpg';
import Image_Y_15 from '../../images/koydeyasam/y_15.jpg';
import Image_Y_16 from '../../images/koydeyasam/y_16.jpg';
import Image_Y_17 from '../../images/koydeyasam/y_17.jpg';
import Image_Y_18 from '../../images/koydeyasam/y_18.jpg';
import Image_Y_19 from '../../images/koydeyasam/y_19.jpg';
import Image_Y_20 from '../../images/koydeyasam/y_20.jpg';

const IMAGES =
   [
      {
         src: Image_Y_1,
         title: 'Büyük Yenge',
         description: ' '
      },
      {
         src: Image_Y_2,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_3,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_4,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_5,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_6,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_7,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_8,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_9,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_10,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_11,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_12,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_13,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_14,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_15,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_16,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_17,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_18,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_19,
         title: ' ',
         description: ' '
      },
      {
         src: Image_Y_20,
         title: ' ',
         description: ' '
      },
   ]

export default class KoydeYasam extends Component {
   render() {
      return (
         <div style={{
            display: "block",
            marginTop: "60px",
            minHeight: "1px",
            overflow: "auto"
         }}>
            <Lightbox
               images={IMAGES}
               thumbnailWidth='320px'
               thumbnailHeight='212px'
               showImageModifiers={false}/>
         </div>
      )
   }
}