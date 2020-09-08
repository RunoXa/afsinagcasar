import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Header from "./Header";
import Images from "./Images";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <Header/>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/counter" component={Counter}/>
                    <Route exact path="/images" component={Images}/>
                </Switch>
                <footer/>
            </BrowserRouter>
        );
    }
}