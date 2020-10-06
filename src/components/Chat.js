import React, {Component} from "react";
import '../styles/Images.css';
import WorkImage from '../images/work-shift.png';

export default class Image2 extends Component {

   render() {
      return (
         <div>
            <div style={{textAlign: "center"}}>
               <h1>CHAT</h1>
               <img src={WorkImage} alt="WorkImage"/>
            </div>
         </div>
      )
   }
}