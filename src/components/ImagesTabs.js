import React, {Component} from "react";
import {Nav, Row, Col, TabContent, TabContainer, TabPane, NavLink, NavItem} from "react-bootstrap";
import '../styles/ImagesTabs.css';
import Image1 from "./Image1";
import Image2 from "./Image2";

export default class ImagesTabs extends Component {

    render() {
        return (
            <div className="main-tabs">
                <TabContainer className="tab-content" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav className="flex-column" variant="pills">
                                <NavItem className="tab-item">
                                    <NavLink eventKey="first">Tab 1</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Tab 2</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="third">Tab 3</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="fourth">Tab 4</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent>
                                <TabPane eventKey="first"><Image1/></TabPane>
                                <TabPane eventKey="second"><Image2/></TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </div>
        );
    }
}