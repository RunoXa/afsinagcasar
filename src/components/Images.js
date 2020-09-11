import React, {Component} from "react";
import {Nav} from "react-bootstrap";
import '../styles/Images.css';

export default class Images extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <Nav defaultActiveKey="/images" className="main-nav flex-column bg-dark" variant="tabs">
                        <h4 className="menu-title">Resimler</h4>
                        <Nav.Link href="/">Resimler 2020</Nav.Link>
                        <Nav.Link eventKey="link-1">Yaz 2019</Nav.Link>
                        <Nav.Link eventKey="link-2">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-3">Yaz 2017</Nav.Link>
                        <Nav.Link eventKey="link-4">Dügünler 2018</Nav.Link>
                        <Nav.Link eventKey="link-5">Yaz 2016</Nav.Link>
                        <Nav.Link eventKey="link-8" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        )
    }
}