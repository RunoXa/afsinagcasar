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
import LoginComponent from "./auth/Login";
import SignUpComponent from "./auth/SignUp";
import NotFound from "./NotFound";
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
               <Redirect to={"/login"}/>
            )
         }
      />
   );
};

const AuthContainer = () => (
   <div>
      <Route exact path="/login" component={LoginComponent}/>
      <Route exact path="/signup" component={SignUpComponent}/>
   </div>
)

const DefaultContainer = () => (
   <div>
      <header className="page-header">
         <Header/>
      </header>
      <div>
         <Switch>
         <PrivateRoute exact path="/" component={Home}/>
         {/*<PrivateRoute exact path="/home" component={Home}/>*/}
         <PrivateRoute exact path="/images" component={ImagesTabs}/>
         <PrivateRoute exact path="/radio"/>
         <PrivateRoute exact path="/chat" component={Chat}/>
         <PrivateRoute exact path="/tree" component={FamilyTree}/>
         <PrivateRoute exact path="/culture" component={CultureTabs}/>
         <PrivateRoute exact path="/textWriterTabs" component={TextWriterTabs}/>
         <PrivateRoute exact path="/contact" component={Contact}/>
         <PrivateRoute exact component={NotFound}/>
         </Switch>
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
                        <Route exact path="/login" component={AuthContainer}/>
                        <Route exact path="/signup" component={AuthContainer}/>
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