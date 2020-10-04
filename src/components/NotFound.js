import React, {Component} from "react";
import NotFoundImage from '../images/404.png'
import '../styles/NotFound.css'

export default class NotFound extends Component {

   render() {

      return (
         <div>
            <div>
               <section className="container">
                  <h1 className="notFoundTitle">Sayfa Bulunamadı</h1>
                  <div className="container">
                     <div className="notFoundText">
                        <img src={NotFoundImage} alt="NotFoundImage" style={{
                           maxWidth: "300px", marginRight: "auto", marginLeft: "auto", width: "50%", display: "block"
                        }}/>
                        <p><h4 className="notFoundTitle">ANASAYFAYA
                           <a href="/" className="linkToHomepage">GERİ DÖN</a>
                        </h4></p>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      )
   }
}