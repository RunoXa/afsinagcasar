import React, {Component, useContext} from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import '../styles/App.css'
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Chat from "./Chat";
import ImagesTabs from "./ImagesTabs";
import FamilyTree from "./FamilyTree";
import TextWriterTabs from "./TextWriterTabs";
import CultureTabs from "./CultureTabs";
import LoginComponent from "./login/Login";
import SignUpComponent from "./signup/SignUp";
import {AuthContext, AuthProvider} from "./Auth";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
   const {currentUser} = useContext(AuthContext);
   return (
      <Route
         {...rest}
         render={routeProps =>
            !!currentUser ? (
               <RouteComponent {...routeProps} />
            ) : (
               <Redirect to={"/afsinagcasar/login"}/>
            )
         }
      />
   );
};

const AuthContainer = () => (
   <div>
      <Route exact path="/afsinagcasar/login" component={LoginComponent}/>
      <Route exact path="/afsinagcasar/signup" component={SignUpComponent}/>
   </div>
)

const DefaultContainer = () => (
   <div>
      <header className="page-header">
         <Header/>
      </header>
      <div>
         <PrivateRoute exact path="/afsinagcasar" component={Home}/>
         {/*<PrivateRoute exact path="/afsinagcasar/home" component={Home}/>*/}
         <PrivateRoute exact path="/afsinagcasar/images" component={ImagesTabs}/>
         <PrivateRoute exact path="/afsinagcasar/radio"/>
         <PrivateRoute exact path="/afsinagcasar/chat" component={Chat}/>
         <PrivateRoute exact path="/afsinagcasar/tree" component={FamilyTree}/>
         <PrivateRoute exact path="/afsinagcasar/culture" component={CultureTabs}/>
         <PrivateRoute exact path="/afsinagcasar/textWriterTabs" component={TextWriterTabs}/>
         <PrivateRoute exact path="/afsinagcasar/contact" component={Contact}/>
      </div>
      <Footer/>
   </div>
)

export default class App extends Component {
   render() {
      return (
         <div className="page-container">
            <AuthProvider>
               <BrowserRouter>
                  <div>
                     <Switch>
                        <Route exact path="/afsinagcasar/login" component={AuthContainer}/>
                        <Route exact path="/afsinagcasar/signup" component={AuthContainer}/>
                        <Route exact path="/" component={AuthContainer}/>
                        <div className="content-wrap">
                           <div className="page-content">
                              <Route component={DefaultContainer}/>
                           </div>
                        </div>
                     </Switch>
                  </div>
               </BrowserRouter>
            </AuthProvider>
         </div>
      );
   }
}