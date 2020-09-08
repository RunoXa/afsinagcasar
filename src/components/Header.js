import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Header.css';
import HouseIcon from '../icons/house.svg'

export default class Header extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        {/*<Navbar.Brand className="">Ağcaşar Köyü</Navbar.Brand>*/}
                        <h3>Ağcaşar Köyü</h3>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Nav className="mr-auto">
                            <NavLink exact to="/" className="navLink"
                                     activeClassName="main-nav-active">Home</NavLink>
                            <NavLink exact to="/counter" className="navLink"
                                     activeClassName="main-nav-active">Counter</NavLink>
                            <NavLink exact to="/images" className="navLink"
                                     activeClassName="main-nav-active">Resimler</NavLink>

                            <NavDropdown title="Dropdown" className="navDropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </React.Fragment>
            </div>
        );
    }
}