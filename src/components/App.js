import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../styles/App.css'
import Home from './Home';
import Counter from './Counter';
import Header from "./Header";
import Images from "./Images";
import Footer from "./Footer";
import Contact from "./Contact";

export default class App extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <BrowserRouter>
                        <header>
                            <Header/>
                        </header>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/counter" component={Counter}/>
                            <Route exact path="/images" component={Images}/>
                            <Route exact path="/radio" component={Images}/>
                            <Route exact path="/contact" component={Contact}/>
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        );
    }
}