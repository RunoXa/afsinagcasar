import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
// import Contact from "./Contact";
import Counter from './Counter';
import {Navbar, Nav, NavDropdown, NavLink} from 'react-bootstrap';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    {/*<Route exact path='/' component={Home}/>*/}
                    <Route path='/counter' component={Counter}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;