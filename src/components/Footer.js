import React from "react";
import '../styles/Footer.css';
import YoutubeIcon from '../icons/youtube.svg';
import {Link} from "react-router-dom";
import {
   EmailIcon,
   TwitterIcon,
   FacebookIcon
} from "react-share";

const Footer = () => {
   return (
      <div className="main-footer">
         <div className="container">
            <div className="row">
               {/*Column 1*/}
               <div className="col-md-3 col-sm-3">
                  <h4 className="footer-titles">İletişim</h4>
                  <ul className="list-unstyled">
                     <li><Link to="/contact" className="footer-links">Biz Kimiz</Link></li>
                     <li><Link to="/bize-ulas" className="footer-links">Bize Ulaş</Link></li>
                     <li><a className="footer-links">Sıkça Sorulan Sorular</a></li>
                  </ul>
               </div>
               {/*Column 2*/}
               <div className="col-md-3 col-sm-3">
                  <h4 className="footer-titles">Organizasyon</h4>
                  <ul className="list-unstyled">
                     <li><Link to="/chat" className="footer-links">Sohbet & Müzik</Link></li>
                     <li><a className="footer-links">Videolar</a></li>
                     <li><a className="footer-links">Kurallar</a></li>
                  </ul>
               </div>
               {/*Column 3*/}
               <div className="col-md-4 col-sm-4">
                  <h4 className="footer-titles">Haberler ve Duyurular</h4>
                  <ul className="list-unstyled">
                     <li><a className="footer-links">Güncel Haberler</a></li>
                     <li><a className="footer-links">Yeni Eklenenler</a></li>
                     <li><a className="footer-links">Yakında</a></li>
                  </ul>
               </div>
               {/*Column 3*/}
               <div className="social-bar">
                  <h4 className="footer-titles">Sosyal Medya</h4>
                  <ul className="social-icons list-unstyled">
                     <li><a href="https://www.facebook.com/afsin.agcasar"
                            target="_blank" rel="noopener noreferrer"><FacebookIcon size={32}
                                                                                    round={true}
                                                                                    className='footer-icon'/></a>
                     </li>
                     <li><a href="https://twitter.com/afsinagcasar" target="_blank"
                            rel="noopener noreferrer"><TwitterIcon size={32} round={true} className='footer-icon'/></a>
                     </li>
                     <li><Link to="/bize-ulas" rel="noopener noreferrer"><EmailIcon size={32} round={true}
                                                                                   className='footer-icon'/></Link>
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
                  &copy; Agcasarlilar {new Date().getFullYear()} | Tüm Hakları Saklıdır | Terms of Service | Privacy
               </p>
            </div>
         </div>
      </div>
   )
};

export default Footer

