import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages import
import Homepage from "../pages/Homepage";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" key="home" component={Homepage} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
