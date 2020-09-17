import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Header.css';
import HouseIcon from '../icons/house.svg'
import ImagesIcon from '../icons/images.svg'
import MusicPlayerIcon from '../icons/music_player.svg'
import TreeIcon from '../icons/tree.svg'
import TextIcon from '../icons/text.svg'

export default class Header extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar className="main-navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                        {/*<Navbar.Brand exact href="/">Ağcaşar Köyü</Navbar.Brand>*/}
                        <a href="/"><h3>Ağcaşar Köyü</h3></a>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link exact to="/" eventKey="1" as={Link}><img src={HouseIcon}
                                                                                   className="header-icon"
                                                                                   alt="houseIcon"/>Anasayfa</Nav.Link>
                                <Nav.Link exact to="/images" eventKey="2" as={Link}><img src={ImagesIcon}
                                                                                         className="header-icon"
                                                                                         alt="imagesIcon"/>Resimler</Nav.Link>
                                <Nav.Link exact to="/tree" eventKey="4" as={Link}><img src={TreeIcon}
                                                                                       className="header-icon"
                                                                                       alt="treeIcon"/>Soyağacı</Nav.Link>
                                <Nav.Link exact to="/radio" eventKey="3" as={Link}><img src={MusicPlayerIcon}
                                                                                        className="header-icon"
                                                                                        alt="musicPlayerIcon"/>Radyo</Nav.Link>
                                <Nav.Link exact to="/text" eventKey="5" as={Link}><img src={TextIcon}
                                                                                       className="header-icon"
                                                                                       alt="textIcon"/>Yazılar</Nav.Link>
                                {/*<NavDropdown title="Dil Seçeneği" className="navDropdown">*/}
                                {/*    <NavDropdown.Item href="#action/3.1">TR</NavDropdown.Item>*/}
                                {/*    <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>*/}
                                {/*    <NavDropdown.Item href="#action/3.3">DE</NavDropdown.Item>*/}
                                {/*</NavDropdown>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </React.Fragment>
            </div>
        );
    }
}