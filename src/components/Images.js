import React, {Component} from "react";
import {Nav} from "react-bootstrap";
import '../styles/Images.css';

export default class Images extends Component {

    render() {
        return (
            <div>
                <body>
                <div className="main-menu">
                    <Nav defaultActiveKey="/images" className="main-nav flex-column bg-dark" variant="tabs">
                        <h4 className="menu-title">Resimler</h4>
                        <Nav.Link href="/images">Resimler 2020</Nav.Link>
                        <Nav.Link eventKey="link-1">Dügünler 2019</Nav.Link>
                        <Nav.Link eventKey="link-2">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-3">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-4">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-5">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-8" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </div>
                </body>
            </div>
        )
    }
}