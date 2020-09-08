import React from "react";

function Footer() {
    return (
        <div className="main-footer text-light bg-dark">
            <div className="container">
                <div className="row">
                    {/*Column 1*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>kontakt</h4>
                        <ul className="list-unstyled">
                            <li>Kontakt</li>
                            <li>Standort</li>
                            <li>Imressum</li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>kontakt 2</h4>
                        <ul className="list-unstyled">
                            <li>erste</li>
                            <li>zweite</li>
                            <li>dritte</li>
                            <li>vierte</li>
                        </ul>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Afsin Agcasar Site - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer