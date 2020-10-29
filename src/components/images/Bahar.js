import React, {Component} from "react";
import '../../styles/Images.css';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import Bahar1 from '../../images/bahar/bahar1.JPG';
import Bahar2 from '../../images/bahar/bahar2.JPG';
import Bahar3 from '../../images/bahar/bahar3.JPG';
import Bahar4 from '../../images/bahar/bahar4.JPG';
import Bahar5 from '../../images/bahar/bahar5.JPG';
import Bahar6 from '../../images/bahar/bahar6.JPG';
import Bahar7 from '../../images/bahar/bahar7.JPG';
import Bahar8 from '../../images/bahar/bahar8.JPG';
import Bahar9 from '../../images/bahar/bahar9.JPG';
import Bahar10 from '../../images/bahar/bahar10.JPG';
import Bahar11 from '../../images/bahar/bahar11.JPG';
import Bahar12 from '../../images/bahar/bahar12.JPG';
import Bahar13 from '../../images/bahar/bahar13.JPG';
import Bahar14 from '../../images/bahar/bahar14.JPG';
import Bahar15 from '../../images/bahar/bahar15.JPG';
import Bahar16 from '../../images/bahar/bahar16.JPG';
import Bahar17 from '../../images/bahar/bahar17.JPG';
import Bahar18 from '../../images/bahar/bahar18.JPG';
import Bahar19 from '../../images/bahar/bahar19.JPG';
import Bahar20 from '../../images/bahar/bahar20.JPG';
import Bahar21 from '../../images/bahar/bahar21.JPG';
import Bahar22 from '../../images/bahar/bahar22.JPG';
import Bahar23 from '../../images/bahar/bahar23.JPG';
import Bahar24 from '../../images/bahar/bahar24.JPG';
import Bahar25 from '../../images/bahar/bahar25.JPG';
import Bahar26 from '../../images/bahar/bahar26.JPG';
import Bahar27 from '../../images/bahar/bahar27.JPG';
import Bahar28 from '../../images/bahar/bahar28.JPG';
import Bahar29 from '../../images/bahar/bahar29.JPG';
import Bahar30 from '../../images/bahar/bahar30.JPG';

const IMAGES =
   [
      {
         src: Bahar1,
         thumbnail: Bahar1,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar2,
         thumbnail: Bahar2,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar3,
         thumbnail: Bahar3,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar4,
         thumbnail: Bahar4,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar5,
         thumbnail: Bahar5,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar6,
         thumbnail: Bahar6,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar7,
         thumbnail: Bahar7,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar8,
         thumbnail: Bahar8,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar9,
         thumbnail: Bahar9,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar10,
         thumbnail: Bahar10,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar11,
         thumbnail: Bahar11,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar12,
         thumbnail: Bahar12,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar13,
         thumbnail: Bahar13,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar14,
         thumbnail: Bahar14,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar15,
         thumbnail: Bahar15,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar16,
         thumbnail: Bahar16,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar17,
         thumbnail: Bahar17,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar18,
         thumbnail: Bahar18,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar19,
         thumbnail: Bahar19,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar20,
         thumbnail: Bahar20,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar21,
         thumbnail: Bahar21,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar22,
         thumbnail: Bahar22,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar23,
         thumbnail: Bahar23,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar24,
         thumbnail: Bahar24,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar25,
         thumbnail: Bahar25,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar26,
         thumbnail: Bahar26,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar27,
         thumbnail: Bahar27,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar28,
         thumbnail: Bahar28,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar29,
         thumbnail: Bahar29,
         title: ' ',
         description: ' ',
      },
      {
         src: Bahar30,
         thumbnail: Bahar30,
         title: ' ',
         description: ' ',
      },
   ];

export default class Bahar extends Component {

   render() {
      return (

         <div className="main-images-1" style={{
            display: "block",
            minHeight: "1px",
            marginTop: "60px",
         }}>
            <Lightbox
               images={IMAGES}
               thumbnailWidth={'300px'}
               thumbnailHeight={'400px'}
               showImageModifiers={false}/>
         </div>
      )
   }
}