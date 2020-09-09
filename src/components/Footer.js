import React from "react";
import '../styles/Footer.css'
import FacebookIcon from "../icons/facebook.svg";

function Footer() {
    return (
        <div className="main-footer text-light bg-dark">
            <div className="container">
                <div className="row">
                    {/*Column 1*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>İletişim</h4>
                        <ul className="list-unstyled">
                            <li>Kontakt</li>
                            <li>Standort</li>
                            <li>Imressum</li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Yenilikler</h4>
                        <ul className="list-unstyled">
                            <li>Afşin 1</li>
                            <li>Afşin 2</li>
                            <li>Afşin 3</li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div className="social-bar col-md-3 col-sm-6 social-bar">
                        <h4>Sosyal Medya</h4>
                        <ul className="list-unstyled">
                            <li><a href="http://www.facebook.com"><img src={FacebookIcon} alt="facebookIcon"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright-text">
                        &copy;{new Date().getFullYear()} Afsin Agcasar Site - All Rights Reserved
                    </p>
                </div>
                {/*Footer Bottom*/}
            </div>
        </div>
    );
}

export default Footer