import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import configureStore from "Store";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";

import App from "Components/App";

const store = configureStore({ loggedIn: false, questions: [] });

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
