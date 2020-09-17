import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../styles/App.css'
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import ImagesTabs from "./ImagesTabs";
import FamilyTree from "./FamilyTree";

export default class App extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <BrowserRouter>
                        <header className="page-header">
                            <Header/>
                        </header>
                        <div className="page-content">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/images" component={ImagesTabs}/>
                                <Route exact path="/radio"/>
                                <Route exact path="/tree" component={FamilyTree}/>
                                <Route exact path="/text"/>
                                <Route exact path="/contact" component={Contact}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        );
    }
}