import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../styles/App.css'
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import ImagesTabs from "./ImagesTabs";
import FamilyTree from "./FamilyTree";
import TextWriterTabs from "./TextWriterTabs";
import CultureTabs from "./CultureTabs";

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
                        <Route exact path="/afsinagcasar" component={Home}/>
                        <Route exact path="/afsinagcasar/images" component={ImagesTabs}/>
                        <Route exact path="/afsinagcasar/radio"/>
                        <Route exact path="/afsinagcasar/tree" component={FamilyTree}/>
                        <Route exact path="/afsinagcasar/culture" component={CultureTabs}/>
                        <Route exact path="/afsinagcasar/textWriterTabs" component={TextWriterTabs}/>
                        <Route exact path="/afsinagcasar/contact" component={Contact}/>
                     </Switch>
                  </div>
               </BrowserRouter>
            </div>
            <Footer/>
         </div>
      );
   }
}