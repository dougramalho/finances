import storeFactory from "./store";
import initialState from "./initialState";
import {FetchRecebimentos, FetchPagamentos, FetchCaixa} from "./actions/actions.js";
import App from "./components/App.js";
import Main from "./components/Main.js";
import {Layout} from "./components/Layout.js";
import { render } from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import { BrowserRouter, HashRouter,  Switch,  Route,  Link} from 'react-router-dom';

import requireAuth from "./components/Require_authentication.js";

let store = storeFactory();

store.dispatch(FetchRecebimentos());
store.dispatch(FetchPagamentos());
store.dispatch(FetchCaixa());

window.store = store;


const routes = (
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/finances" component={requireAuth(Main)} />
				</Switch>
			</Layout>	
		</BrowserRouter>
	</Provider> 
);

render(routes, document.getElementById('react-container'));


