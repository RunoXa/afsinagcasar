import React, {Component, useContext} from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext, AuthProvider} from "./Auth";
import '../styles/App.css';
import Home from './home/Home';
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Chat from "./chat/Chat";
import ImagesTabs from "./tabs/ImagesTabs";
import CultureTabs from "./tabs/CultureTabs";
import FamilyTree from "./FamilyTree";
import LoginComponent from "./auth/Login";
import SignUpComponent from "./auth/SignUp";
import PasswordResetComponent from "./auth/PasswordReset";
import NotFound from "./NotFound";
import VeliDedeAnlatiyorTabs from "./tabs/VeliDedeAnlatiyorTabs";
import AliRizaArslanTabs from "./tabs/AliRizaArslanTabs";
import BizeUlas from "./BizeUlas";
import Profile from "./Profile";

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
      <Route exact path="/passwordReset" component={PasswordResetComponent}/>
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
            <PrivateRoute exact path="/history/veliDedeAnlatiyor" component={VeliDedeAnlatiyorTabs}/>
            <PrivateRoute exact path="/history/veliDedeAnlatiyor/" component={VeliDedeAnlatiyorTabs}/>
            <PrivateRoute exact path="/history/veliDedeAnlatiyor/sayfa1" component={VeliDedeAnlatiyorTabs}/>
            <PrivateRoute exact path="/history/veliDedeAnlatiyor/sayfa2" component={VeliDedeAnlatiyorTabs}/>
            <PrivateRoute exact path="/history/veliDedeAnlatiyor/sayfa3" component={VeliDedeAnlatiyorTabs}/>
            <PrivateRoute exact path="/history/veliDedeAnlatiyor/sayfa4" component={VeliDedeAnlatiyorTabs}/>
            <PrivateRoute exact path="/culture" component={CultureTabs}/>
            <PrivateRoute exact path="/culture/" component={CultureTabs}/>
            <PrivateRoute exact path="/culture/kultur" component={CultureTabs}/>
            <PrivateRoute exact path="/culture/yaylaKulturu" component={CultureTabs}/>
            <PrivateRoute exact path="/culture/yaylaGocu" component={CultureTabs}/>
            <PrivateRoute exact path="/culture/kocKatimi" component={CultureTabs}/>
            <PrivateRoute exact path="/culture/agcasarGecmisimiz" component={CultureTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/1" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/2" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/3" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/4" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/5" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/6" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/7" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/writer/aliRizaArslan/8" component={AliRizaArslanTabs}/>
            <PrivateRoute exact path="/contact" component={Contact}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <PrivateRoute exact path="/bize-ulas" component={BizeUlas}/>
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
                        <Route exact path="/passwordReset" component={AuthContainer}/>
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