import React, {Component} from "react";
import {Nav, Row, Col, TabContent, TabContainer, TabPane, NavLink, NavItem} from "react-bootstrap";
import '../styles/ImagesTabs.css';
import Image1 from "./Image1";
import Image2 from "./Image2";

export default class ImagesTabs extends Component {

    render() {
        return (
            <div>
                <TabContainer id="left-tabs" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav className="flex-column" variant="pills">
                                <NavItem>
                                    <NavLink eventKey="first">Tab 1</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Tab 2</NavLink>
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