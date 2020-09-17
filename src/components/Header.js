import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Header.css';
import HouseIcon from '../icons/house.svg'
import ImagesIcon from '../icons/images.svg'
import MusicPlayerIcon from '../icons/music_player.svg'
import TreeIcon from '../icons/tree.svg'
import TextIcon from '../icons/text.svg'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navExpanded: false
        };
    }

    setExpanded = (expanded) => {
        this.setState({navExpanded: expanded});
    };

    setNavClose = () => {
        this.setState({navExpanded: false});
    };

    render() {

        return (
            <div>
                <React.Fragment>
                    <Navbar onToggle={this.setExpanded} expanded={this.state.navExpanded} className="main-navbar"
                            expand="xl" bg="dark"
                            variant="dark">
                        {/*<Navbar.Brand exact href="/">Ağcaşar Köyü</Navbar.Brand>*/}
                        <a href="/"><h3>Ağcaşar Köyü</h3></a>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" onClick={this.setNavClose}>
                                <NavLink exact to="/" className="navLink" activeClassName="navLinkActive"
                                         eventKey="1"><img src={HouseIcon} className="header-icon" alt="houseIcon"/>Anasayfa</NavLink>
                                <NavLink exact to="/images" className="navLink" activeClassName="navLinkActive"
                                         eventKey="2"><img src={ImagesIcon} className="header-icon" alt="imagesIcon"/>Resimler</NavLink>
                                <NavLink exact to="/tree" className="navLink" activeClassName="navLinkActive"
                                         eventKey="4"><img src={TreeIcon} className="header-icon" alt="treeIcon"/>Soyağacı</NavLink>
                                <NavLink exact to="/radio" className="navLink" activeClassName="navLinkActive"
                                         eventKey="3"><img src={MusicPlayerIcon} className="header-icon" alt="musicPlayerIcon"/>Radyo</NavLink>
                                <NavLink exact to="/text" className="navLink" activeClassName="navLinkActive"
                                         eventKey="5"><img src={TextIcon} className="header-icon" alt="textIcon"/>Yazılar</NavLink>
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