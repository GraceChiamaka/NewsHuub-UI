import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages import
import Homepage from '../pages/Homepage';
import Landingpage from '../pages/LandingPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" key="home" component={Homepage} />
            <Route path="/" key="landing-page" component={Landingpage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
