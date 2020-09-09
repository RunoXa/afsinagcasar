import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Header.css';
import HouseIcon from '../icons/house.svg'
import ImagesIcon from '../icons/images.svg'
import MusicPlayerIcon from '../icons/music_player.svg'

export default class Header extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        {/*<Navbar.Brand className="">Ağcaşar Köyü</Navbar.Brand>*/}
                        <h3>Ağcaşar Köyü</h3>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink exact to="/" className="navLink"
                                         activeClassName="main-nav-active"><img src={HouseIcon} alt="houseIcon"/>Anasayfa</NavLink>
                                <NavLink exact to="/images" className="navLink"
                                         activeClassName="main-nav-active"><img src={ImagesIcon} alt="imagesIcon"/>Resimler</NavLink>
                                <NavLink exact to="/radio" className="navLink"
                                         activeClassName="main-nav-active"><img src={MusicPlayerIcon} alt="imagesIcon"/>Radyo</NavLink>
                                {/*<NavLink exact to="/counter" className="navLink"*/}
                                {/*         activeClassName="main-nav-active">Counter</NavLink>*/}
                                <NavDropdown title="Dil Seçeneği" className="navDropdown">
                                    <NavDropdown.Item href="#action/3.1">TR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">DE</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </React.Fragment>
            </div>
        );
    }
}