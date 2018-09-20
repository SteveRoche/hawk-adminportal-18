import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import configureStore from "Store";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import "Styles/normalize.css";
import "Styles/global.css";

import App from "Components/App";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheck, faTrashAlt, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faPencilAlt, faCheck, faTrashAlt, faPlus, faSearch);

const store = configureStore({});

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
