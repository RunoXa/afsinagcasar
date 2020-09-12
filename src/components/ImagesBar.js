import React, {Component} from "react";
import {Nav, NavLink} from "react-bootstrap";
import '../styles/ImagesBar.css';

export default class ImagesBar extends Component {

    render() {
        return (
            <div>
                <div>
                    <Nav defaultActiveKey="/images" className="main-nav flex-column bg-dark" variant="tabs">
                        <h4 className="menu-title">Resimler</h4>
                        <NavLink href="/images/image1" className="navLink"
                                 activeClassName="navLink-active">Köyde Yasam</NavLink>
                        <NavLink href="" className="navLink"
                                 activeClassName="navLink-active">Yasam Tarzi</NavLink>
                        <NavLink href="" className="navLink"
                                 activeClassName="navLink-active">Tatiller</NavLink>
                    </Nav>
                </div>
            </div>
        )
    }
}