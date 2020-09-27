import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Header.css';
import HouseIcon from '../icons/house.svg'
import ImagesIcon from '../icons/images.svg'
import MusicPlayerIcon from '../icons/music_player.svg'
import CultureIcon from '../icons/culture.svg'
import DiagramIcon from '../icons/diagram.svg'
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
               <Navbar onToggle={this.setExpanded} expanded={this.state.navExpanded}
                       expand="lg" bg="dark"
                       variant="dark">
                  {/*<Navbar.Brand exact href="/">Ağcaşar Köyü</Navbar.Brand>*/}
                  <a href="/"><h3>Ağcaşar Köyü</h3></a>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                        <NavLink exact to="/" className="navLink" activeClassName="navLinkActive"
                                 eventKey="1" onClick={this.setNavClose}><img src={HouseIcon} className="header-icon"
                                                                              alt="houseIcon"/>Anasayfa</NavLink>
                        <NavLink exact to="/images" className="navLink" activeClassName="navLinkActive"
                                 eventKey="2" onClick={this.setNavClose}><img src={ImagesIcon} className="header-icon"
                                                                              alt="imagesIcon"/>Resimler</NavLink>
                        <NavLink exact to="/culture" className="navLink" activeClassName="navLinkActive"
                                 eventKey="3" onClick={this.setNavClose}><img src={CultureIcon} className="header-icon"
                                                                              alt="cultureIcon"/>Kültür</NavLink>
                        <NavLink exact to="/tree" className="navLink" activeClassName="navLinkActive"
                                 eventKey="4" onClick={this.setNavClose}><img src={DiagramIcon} className="header-icon"
                                                                              alt="diagramIcon"/>Soyağacı</NavLink>
                        {/*<NavLink exact to="/radio" className="navLink" activeClassName="navLinkActive"*/}
                        {/*         eventKey="4" onClick={this.setNavClose}><img src={MusicPlayerIcon}*/}
                        {/*                                                      className="header-icon"*/}
                        {/*                                                      alt="musicPlayerIcon"/>Radyo</NavLink>*/}
                        <NavDropdown
                           title={<div><img src={TextIcon} className="header-icon" alt="textIcon"/>Yazilar</div>}
                           renderMenuOnMount={true} className="navLink">
                           <NavDropdown.Item href="/textWriterTabs">Site Yazarları</NavDropdown.Item>
                           <NavDropdown.Item href="/text">Mektuplar</NavDropdown.Item>
                           <NavDropdown.Item href="/text">Tarih</NavDropdown.Item>
                        </NavDropdown>
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
            </React.Fragment>
         </div>
      );
   }
}