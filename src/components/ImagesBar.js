import React, {Component} from "react";
import {Nav} from "react-bootstrap";
import '../styles/ImagesBar.css';

export default class ImagesBar extends Component {

    render() {
        return (
            <div>
                <div>
                    <Nav defaultActiveKey="/images" className="main-nav flex-column bg-dark" variant="tabs">
                        <h4 className="menu-title">Resimler</h4>
                        <Nav.Link href="/images/image1">Resimler 2020</Nav.Link>
                        <Nav.Link eventKey="link-1">Yaz 2019</Nav.Link>
                        <Nav.Link eventKey="link-2">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-8" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        )
    }
}