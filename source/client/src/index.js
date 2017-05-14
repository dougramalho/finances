import storeFactory from "./store";
import initialState from "./initialState";
import {FetchInputs, FetchOutputs, FetchCaixa} from "./actions/actions.js";
import App from "./components/App.js";
import { render } from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import { BrowserRouter, HashRouter,  Switch,  Route,  Link} from 'react-router-dom';

let store = storeFactory();

window.store = store;

const routes = (
	<Provider store={store}>
	   <BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>	
	   </BrowserRouter>
	</Provider> 
);

render(routes, document.getElementById('react-container'));


