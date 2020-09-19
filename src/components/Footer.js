import React from "react";
import '../styles/Footer.css'
import YoutubeIcon from '../icons/youtube.svg'
import {
   EmailIcon,
   TwitterIcon,
   FacebookIcon
} from "react-share";

const Footer = () => {
   return (
      <div className="main-footer bg-dark text-light">
         <div className="container">
            <div className="row">
               {/*Column 1*/}
               <div className="col-md-2 col-sm-3">
                  <h4>İletişim</h4>
                  <ul className="list-unstyled">
                     <li><a href="/contact">Kontakt</a></li>
                     <li><a href="/">Events</a></li>
                     <li><a href="/">Impressum</a></li>
                  </ul>
               </div>
               {/*Column 2*/}
               <div className="col-md-2 col-sm-3">
                  <h4>Yenilikler</h4>
                  <ul className="list-unstyled">
                     <li>Afşin 1</li>
                     <li>Afşin 2</li>
                     <li>Afşin 3</li>
                  </ul>
               </div>
               {/*Column 3*/}
               <div className="social-bar">
                  <h4>Sosyal Medya</h4>
                  <ul className="social-icons list-unstyled">
                     <li><a href="https://www.facebook.com/afsin.agcasar"
                            target="_blank" rel="noopener noreferrer"><FacebookIcon size={32}
                                                          round={true}
                                                          className='footer-icon'/></a>
                     </li>
                     <li><a href="https://twitter.com/afsinagcasar" target="_blank" rel="noopener noreferrer"><TwitterIcon size={31} round={true} className='footer-icon'/></a>
                     </li>
                     <li><a href="/" target="_blank" rel="noopener noreferrer"><EmailIcon size={31} round={true} className='footer-icon'/></a>
                     </li>
                     <li><a href="https://www.youtube.com/channel/UClWom_yPiHPGel4-MacSomQ/featured"
                            target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon}
                                                 className="footer-icon"
                                                 alt="YoutubeIcon"/></a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="footer-bottom">
               <p className="copyright-text">
                  &copy;{new Date().getFullYear()} Afşin Ağcaşar Köyü | All Rights Reserved | Terms of Service |
                  Privacy
               </p>
            </div>
         </div>
      </div>
   )
};

export default Footer

